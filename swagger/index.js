const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzOTU4IiwiaXNzIjoia2lraUIiLCJpYXQiOjE2NTgwMjg4MDQsImV4cCI6MTY1ODYzMzYwNH0.aS5mMgD6vvm0WgBSkBKSLt7fvkkqolWkwq5m01GbJY3IiBx6BiVL7hB56ecO8O8lAJe8ZO7O2y8aECmCWA-gFA";
const swaggerUiOptions = {
  swaggerOptions: {
    authAction: {
      bearerAuth: {
        name: "JWT",
        schema: {
          type: "http",
          in: "header",
          name: "Authorization",
        },
        value: `${token}`,
      },
    },
    docExpansion: "none",
  },
  persistAuthorization: true,
};

module.exports = (app) => {
  app.use(
    "/doc",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, swaggerUiOptions)
  );
};
