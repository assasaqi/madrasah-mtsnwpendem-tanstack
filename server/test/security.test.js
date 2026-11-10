const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const request = require('supertest');
const app = require('../src/app');
const env = require('../src/config/env');

describe('Keamanan API & Autentikasi', () => {
  it('menolak origin CORS asing dan mengizinkan FRONTEND_URL resmi', async () => {
    const blocked = await request(app)
      .get('/')
      .set('Origin', 'https://evil-attacker.example');

    expect(blocked.headers['access-control-allow-origin']).toBeUndefined();

    const allowed = await request(app)
      .get('/')
      .set('Origin', env.FRONTEND_URL);

    expect(allowed.headers['access-control-allow-origin']).toBe(env.FRONTEND_URL);
    expect(allowed.headers['access-control-allow-credentials']).toBe('true');
  });

  it('menolak POST /api/auth/google/complete tanpa token Google terverifikasi', async () => {
    const res = await request(app)
      .post('/api/auth/google/complete')
      .send({ email: 'admin@madrasah.test', scope: 'admin' });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it('menolak POST /api/auth/google/complete dengan gtoken palsu', async () => {
    const res = await request(app)
      .post('/api/auth/google/complete')
      .send({ gtoken: 'forged.jwt.token', scope: 'admin' });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it('memvalidasi cookie googlePending pada GET /api/auth/google/pending', async () => {
    const missing = await request(app).get('/api/auth/google/pending');
    expect(missing.status).toBe(401);

    const validToken = jwt.sign(
      {
        email: 'pendaftar@example.com',
        nama: 'Calon Siswa',
        foto: null,
        scope: 'spmb',
        mode: 'register',
        purpose: 'google-oauth-confirm'
      },
      env.JWT_ACCESS_SECRET,
      { expiresIn: '5m' }
    );

    const valid = await request(app)
      .get('/api/auth/google/pending')
      .set('Cookie', [`googlePending=${validToken}`]);

    expect(valid.status).toBe(200);
    expect(valid.body.data.email).toBe('pendaftar@example.com');
  });

  it('menolak akses admin tanpa token atau dengan role non-admin', async () => {
    const unauth = await request(app).get('/api/admin/ppdb');
    expect(unauth.status).toBe(401);

    const userToken = jwt.sign(
      { id: 'user-1', role: 'CALON_PENDAFTAR' },
      env.JWT_ACCESS_SECRET,
      { expiresIn: '5m' }
    );

    const forbidden = await request(app)
      .get('/api/admin/ppdb')
      .set('Cookie', [`accessToken=${userToken}`]);

    expect(forbidden.status).toBe(403);
  });

  it('membatasi role OPERATOR agar tidak dapat mengakses manajemen pengelola dan profil lembaga', async () => {
    const operatorToken = jwt.sign(
      { id: 'op-1', role: 'OPERATOR' },
      env.JWT_ACCESS_SECRET,
      { expiresIn: '5m' }
    );
    const cookie = [`accessToken=${operatorToken}`];

    const usersRes = await request(app).get('/api/admin/users').set('Cookie', cookie);
    expect(usersRes.status).toBe(403);

    const schoolRes = await request(app).get('/api/admin/profile/school').set('Cookie', cookie);
    expect(schoolRes.status).toBe(403);

    const letterRes = await request(app)
      .put('/api/admin/ppdb/pengaturan')
      .set('Cookie', cookie)
      .send({ tahunAjaran: '2026/2027', kodeSurat: 'SPMB' });
    expect(letterRes.status).toBe(403);
  });

  it('menolak registrasi admin bila kode undangan salah', async () => {
    const res = await request(app)
      .post('/api/auth/register-admin')
      .send({
        email: 'baru@example.com',
        password: 'password123',
        inviteCode: 'kode-salah'
      });

    expect(res.status).toBe(403);
  });

  it('membersihkan file upload sementara saat jenisDokumen PPDB tidak valid', async () => {
    const uploadsDir = path.join(__dirname, '../uploads');
    const beforeFiles = new Set(fs.existsSync(uploadsDir) ? fs.readdirSync(uploadsDir) : []);

    const userToken = jwt.sign(
      { id: 'user-1', role: 'CALON_PENDAFTAR' },
      env.JWT_ACCESS_SECRET,
      { expiresIn: '5m' }
    );

    const tinyPdf = Buffer.from('%PDF-1.4\n%%EOF\n');
    const res = await request(app)
      .post('/api/ppdb/upload-dokumen')
      .set('Cookie', [`accessToken=${userToken}`])
      .field('jenisDokumen', 'BUKAN_JENIS_VALID')
      .attach('dokumen', tinyPdf, { filename: 'uji.pdf', contentType: 'application/pdf' });

    expect(res.status).toBe(400);

    // Tunggu sebentar agar fs.unlink selesai lalu pastikan tidak ada file tertinggal
    await new Promise((r) => setTimeout(r, 80));
    const afterFiles = fs.existsSync(uploadsDir) ? fs.readdirSync(uploadsDir) : [];
    const leaked = afterFiles.filter((name) => !beforeFiles.has(name));
    expect(leaked).toEqual([]);
  });
});
