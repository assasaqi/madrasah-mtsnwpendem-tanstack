let PrismaClient;
let Prisma;
try {
  ({ PrismaClient, Prisma } = require('../generated/prisma'));
} catch (generatedError) {
  try {
    ({ PrismaClient, Prisma } = require('@prisma/client'));
  } catch {
    console.error('❌ Folder src/generated/prisma belum ada di server hosting:', generatedError.message);
    throw generatedError;
  }
}
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const env = require('./env');

// Singleton Prisma Client dengan adapter MariaDB untuk mencegah kebocoran koneksi
const adapter = new PrismaMariaDb(env.DATABASE_URL);
const prisma = global.prisma || new PrismaClient({ adapter });

if (env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

prisma.Prisma = Prisma;
module.exports = prisma;
module.exports.prisma = prisma;
module.exports.Prisma = Prisma;
