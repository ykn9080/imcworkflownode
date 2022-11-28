const proc = require("../controllers/procedure");
const query = require("../controllers/query");
const auth = require("../middleware/auth");

module.exports = (app) => {
  const models = require("../models");
  require("./reuseCRUD")(app);
  app.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  });
  app.get("/healthcheck", (req, res) => res.send("Hello World!"));

  app.use("/api/getQuery", query.getQuery);
  // app.use("/api/managerreplacelist", auth, proc.managerReplacelist);
  // app.use("/api/managerworkbydateandroute", proc.getWorkbyManager);
  // app.use(
  //   "/api/findshiftthismonth/:routeId/:yearMonth",
  //   proc.findShiftThisMonth
  // );
  // app.use(
  //   "/api/leavedatebydriver/:routeId/:shift/:yearMonth",
  //   proc.leaveDateByDriver
  // );
};
