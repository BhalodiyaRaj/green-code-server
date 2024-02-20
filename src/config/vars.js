const vars = {
  env: process.env.ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  mongo: {
    uri: process.env.ENV === 'dev' ? process.env.MONGO_URI_DEV : process.env.MONGO_URI,
  },

};

module.exports = vars;
