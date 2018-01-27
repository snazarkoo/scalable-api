module.exports = {
  development: {
    database: 'contests',
    password: process.env.NODE_PASSWORD || 'password'
  },
  production: {
    connectionString: process.env.NODE_PG_URL
  }
};
