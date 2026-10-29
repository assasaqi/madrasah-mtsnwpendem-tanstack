const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const { z } = require('zod');

// Validasi ketat untuk variabel lingkungan backend
const envSchema = z.object({
  PORT: z.string().default('5000'),
  DATABASE_URL: z.string().min(1),
  JWT_ACCESS_SECRET: z.string().min(1),
  JWT_REFRESH_SECRET: z.string().min(1),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  FRONTEND_URL: z.string().url()
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Kesalahan Variabel Lingkungan:', parsedEnv.error.format());
  process.exit(1);
}

module.exports = parsedEnv.data;
