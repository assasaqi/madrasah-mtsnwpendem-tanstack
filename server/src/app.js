const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const env = require('./config/env');

const authRoutes = require('./routes/authRoutes');
const ppdbRoutes = require('./routes/ppdbRoutes');
const akademikRoutes = require('./routes/akademikRoutes');
const publicRoutes = require('./routes/publicRoutes');
const publicProfileRoutes = require('./routes/publicProfileRoutes');
const adminRoutes = require('./routes/adminRoutes');
const adminCmsRoutes = require('./routes/adminCmsRoutes');
const adminProfileRoutes = require('./routes/adminProfileRoutes');

const errorHandler = require('./middleware/errorHandler');
const { apiLimiter } = require('./middleware/rateLimiter');

const app = express();

// Middleware keamanan, parser request, dan CORS berkredensial fleksibel (mendukung http/https dan localhost)
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cookieParser());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const cleanOrigin = origin.replace(/^https?:\/\//, '').replace(/\/$/, '').toLowerCase();
    const cleanFrontend = String(env.FRONTEND_URL).replace(/^https?:\/\//, '').replace(/\/$/, '').toLowerCase();

    if (cleanOrigin === cleanFrontend || cleanOrigin.endsWith(cleanFrontend) || origin.includes('localhost') || origin.includes('127.0.0.1')) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Penyajian berkas unggahan dan pembatas laju request API
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/api', apiLimiter);

// Dokumentasi OpenAPI
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Madrasah TanStack API',
      version: '1.0.0',
      description: 'Dokumentasi REST API Sistem Informasi Madrasah'
    }
  },
  apis: [path.join(__dirname, 'routes/*.js')]
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions)));

// Endpoint pemeriksa status server
app.get('/', (req, res) => {
  res.json({ success: true, message: 'API Sistem Informasi & Web Profil Madrasah Aktif.' });
});

// Pendaftaran seluruh rute API aplikasi
app.use('/api/auth', authRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/public/profile', publicProfileRoutes);
app.use('/api/ppdb', ppdbRoutes);
app.use('/api/akademik', akademikRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/cms', adminCmsRoutes);
app.use('/api/admin/profile', adminProfileRoutes);

// Penanganan rute yang tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Rute ${req.originalUrl} tidak ditemukan.` });
});

// Penanganan error global aplikasi
app.use(errorHandler);

module.exports = app;
