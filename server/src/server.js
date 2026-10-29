const app = require('./app');
const env = require('./config/env');

if (process.env.NODE_ENV !== 'test') {
  app.listen(env.PORT, () => {
    console.log(`Server berjalan di port ${env.PORT}`);
  });
}

module.exports = app;
