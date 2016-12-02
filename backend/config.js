module.exports = {
  database: 'crunchbase',
  username: 'root',
  password: null,
  options: {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  },
};
