module.exports = {
  development: {
    url: 'mongodb://localhost:27017/contests'
  },
  production: {
    url: process.env.NODE_MONGO_URL
  }
};
