const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const { z } = require('zod');

// Validasi fleksibel untuk variabel lingkungan backend
const envSchema = z.object({
  PORT: z.string().default('5000'),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL wajib diisi'),
  JWT_ACCESS_SECRET: z.string().min(1, 'JWT_ACCESS_SECRET wajib diisi'),
  JWT_REFRESH_SECRET: z.string().min(1, 'JWT_REFRESH_SECRET wajib diisi'),
  NODE_ENV: z.string().default('production'),
  FRONTEND_URL: z.string().default('http://localhost:5173').transform((val) => {
    const trimmed = String(val).trim();
    if (!trimmed) return 'http://localhost:5173';
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  })
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Kesalahan Variabel Lingkungan:', parsedEnv.error.format());
  process.exit(1);
}

module.exports = parsedEnv.data;
