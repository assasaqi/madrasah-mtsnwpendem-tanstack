const jwt = require('jsonwebtoken');
const env = require('../config/env');

// Verifikasi JWT dari HTTP-Only Cookie
const authenticateToken = (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Akses ditolak. Token autentikasi tidak ditemukan.' });
  }

  try {
    const verified = jwt.verify(token, env.JWT_ACCESS_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Sesi Anda telah berakhir. Silakan login kembali.' });
    }
    return res.status(401).json({ success: false, message: 'Token tidak valid.' });
  }
};

// Verifikasi akses berdasarkan Role
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = String(req.user?.role || '').trim().toUpperCase();
    const uppercaseAllowed = allowedRoles.map((r) => String(r).trim().toUpperCase());

    if (!req.user || !uppercaseAllowed.includes(userRole)) {
      return res.status(403).json({ success: false, message: 'Akses ditolak. Izin tidak mencukupi.' });
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRoles };
