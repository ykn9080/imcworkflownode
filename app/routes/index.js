const proc = require("../controllers/procedure");
const query = require("../controllers/query");
const auth = require("../middleware/auth");

module.exports = (app) => {
  const models = require("../models");
  require("./reuseCRUD")(app);
  require("./docx")(app);
  require("./docx1")(app);
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
  app.use("/api/tempFormListByUser/:userId", proc.tempFormListByUser);
  app.use("/api/formwithTask/:formId", proc.formwithTask);

  app.use("/api/activityInsert", proc.activityInsert);
  //최초르 결재문서를 생성한후 상신할때 사용(상신, 결재를 동시에 입력)
  app.use("/api/activityStart", proc.activityStart);

  // app.use(
  //   "/api/leavedatebydriver/:routeId/:shift/:yearMonth",
  //   proc.leaveDateByDriver
  // );
};
