module.exports = {
  production: {
    HOST: "kiki-deploy.c2gc9pfwihfe.ap-northeast-2.rds.amazonaws.com", //"kikib-korea.mysql.database.azure.com",
    USER: "admin", //"kikii@kikib-korea",
    PASSWORD: "mysql-1733", //"1733a-sql",
    DB: "deploy-kikib", //"dev-kikib",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    LOCAL_PORT: 80,
  },
  development: {
    HOST: "kikibus.iptime.org:13306",
    USER: "kikii",
    PASSWORD: "1733a-sql",
    DB: "workflow",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    LOCAL_PORT: 8011,
  },
};
