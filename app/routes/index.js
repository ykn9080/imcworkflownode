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
  app.use("/api/tasklistbyuser/:userId", proc.taskListByUser);
  app.use("/api/activitylistbyuser/:userId", proc.activityListByUser);
  app.use("/api/ongoinglistbyuser/:userId", proc.onGoingListByUser);
  app.use("/api/findformbytaskid/:taskId", proc.findFormbyTaskId);
  app.use("/api/findformbyprocessid/:processId", proc.findFormbyProcessId);
  app.use(
    "/api/findTaskIdfromLinked/:linkedId/:linkType",
    proc.findTaskIdfromLinked
  );
  app.use("/api/activityInsert", proc.activityInsert);

  // app.use(
  //   "/api/leavedatebydriver/:routeId/:shift/:yearMonth",
  //   proc.leaveDateByDriver
  // );
};
