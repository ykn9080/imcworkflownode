const reqres = require("./requestResponse");
const db = require("../models");
const moment = require("moment");

// exports.managerReplacelist = (req, res) => {
//   if (req.id === undefined) req.id = null;
//   let replacement = {
//     managerId: req.id,
//     routeId: req.body.routeId,
//     yearmonth: req.body.yearMonth,
//   };
//   console.log(replacement);
//   reqres.commonQueryBody(
//     " request_leave(:managerId, :routeId, :yearmonth)",
//     replacement,
//     res
//   );
// };

/**
 * processId, activityId로 taskId 찾기
 * @param {*} req linkedId(processId or activityId), linkType(process, activity)
 * @param {*} res taskId
 */
exports.findTaskIdfromLinked = (req, res) => {
  let replacement = req.params;
  console.log(req.params);
  reqres.commonQueryBody(
    "findTaskIdfromLinked(:linkedId,:linkType)",
    replacement,
    res
  );
};
/**
 * user별로 아직 상신하지 않고 임시저장된 form list
 * @param {*} req userId
 * @param {*} res formlist
 */
exports.formImsiByUser = (req, res) => {
  let replacement = req.params;

  reqres.commonQueryBody("formImsiByUser(:userId)", replacement, res);
};
/**
 * user별 formTemplate list
 * @param {*} req userId
 * @param {*} res 자신이 만든 것과 전사 공유 formTemplate list
 */
exports.formArchiveByUser = (req, res) => {
  let replacement = req.params;

  reqres.commonQueryBody("formArchiveByUser(:userId)", replacement, res);
};
exports.formwithTask = (req, res) => {
  let replacement = req.params;

  reqres.commonQueryBody("formwithTask(:formId)", replacement, res);
};
exports.findFormbyTaskId = (req, res) => {
  console.log(req.params);
  let replacement = req.params;

  reqres.commonQueryBody("findFormbyTaskId(:taskId)", replacement, res);
};
exports.findFormbyProcessId = (req, res) => {
  console.log(req.params);
  let replacement = req.params;

  reqres.commonQueryBody("findFormbyProcessId(:processId)", replacement, res);
};
exports.activityInsert = (req, res) => {
  console.log(req.body);
  let replacement = req.body;

  reqres.commonQueryBody(
    "activityInsert(:processId, :action,:comment,:userId)",
    replacement,
    res
  );
};
/**
 *
 * @param {*} req taskId
 * @param {*} res process중 처음 2개를 inser함
 */
exports.activityStart = (req, res) => {
  let replacement = req.params;
  reqres.commonQueryBody("activityStart(:taskId)", replacement, res);
};

exports.taskListByUser = (req, res) => {
  console.log(req.params);
  let replacement = req.params;

  reqres.commonQueryBody("tasklistbyuser(:userId)", replacement, res);
};
exports.onGoingListByUser = (req, res) => {
  console.log(req.params);
  let replacement = req.params;

  reqres.commonQueryBody("onGoingListbyUser(:userId)", replacement, res);
};
exports.activityListByUser = (req, res) => {
  console.log(req.params);
  let replacement = req.params;

  reqres.commonQueryBody("activitylistbyuser(:userId)", replacement, res);
};

// exports.getRestbyManagerAndYearmonth = (req, res) => {
//   if (req.id === undefined) req.id = null;
//   let replacement = req.params;
//   replacement.managerId = req.id;
//   reqres.commonQueryBody(
//     "rest_by_manager(:managerId, :routeId, :yearMonth)",
//     replacement,
//     res
//   );
// };

//   let queryOrProc = "CALL dispatch_list(:routeId, :datetime)";
//   const rtn = await db.sequelize.query(queryOrProc, option);
//   option = {
//     replacements: req.params,
//     type: db.sequelize.QueryTypes["select"],
//     plain: true,
//   };
//   option.replacements.managerId = req.id;
//   option.replacements.date = moment(option.replacements.datetime).format(
//     "YYYY-MM-DD"
//   );

//   delete option.replacements.datetime;
//   queryOrProc = "CALL leave_summary_by_driver(:managerId,:routeId, :date)";

//   const rtn1 = await db.sequelize.query(queryOrProc, option);
//   let rtnn = Object.values(rtn);
//   let rtnn1 = Object.values(rtn1);

//   await Promise.all(
//     rtnn.map((k, i) => {
//       Object.values(rtn1).forEach((v) => {
//         if (k.driverId === v.driverId) {
//           k.leave_sum = v.leave_sum;
//           k.last_work_date = v.last_work_date;
//           k.work_inarow = v.work_inarow;
//           rtnn.splice(i, 1, k);
//         }
//       });
//     })
//   );
//   await reqres.commonReturn(rtnn1, res);
// };
// exports.dispatchList = async (req, res) => {
//   if (req.id === undefined) req.id = null;

//   let option = {
//     replacements: req.params,
//     type: db.sequelize.QueryTypes["select"],
//     plain: true,
//   };
//   let queryOrProc = "CALL dispatch_list(:routeId, :datetime)";
//   const rtn = await db.sequelize.query(queryOrProc, option);
//   option = {
//     replacements: req.params,
//     type: db.sequelize.QueryTypes["select"],
//     plain: true,
//   };
//   option.replacements.managerId = req.id;
//   option.replacements.date = option.replacements.datetime;
//   queryOrProc = "CALL leave_summary_by_driver(:managerId,:routeId, :date)";
//   const rtn1 = await db.sequelize.query(queryOrProc, option);
//   let rtnn = Object.values(rtn);
//   let rtnn1 = Object.values(rtn1);

//   await Promise.all(
//     rtnn.map((k, i) => {
//       Object.values(rtn1).forEach((v) => {
//         if (k.driverId === v.driverId) {
//           k.leave_sum = v.leave_sum;
//           k.last_work_date = v.last_work_date;
//           k.work_inarow = v.work_inarow;
//           rtnn.splice(i, 1, k);
//         }
//       });
//     })
//   );
//   await reqres.commonReturn(rtnn, res);
// };
// exports.routeListByManager = (req, res) => {
//   if (req.id === undefined) req.id = null;
//   let replacement = req.params;
//   replacement.managerId = req.id;
//   reqres.commonQueryBody(
//     "route_list_by_manager(:managerId,:placeId, :datetime)",
//     replacement,
//     res
//   );
// };
// exports.getBusArrivalStation = (req, res) => {
//   const rq = req.path.split("/");
//   let replacement = { routeId: -1, date: "1900-01-01" };
//   if (rq[1]) replacement.routeId = rq[1];
//   if (rq[2]) replacement.cdate = rq[2];

//   reqres.commonQueryBody(
//     "get_bus_arrival_station(:routeId,:cdate)",
//     replacement,
//     res
//   );
// };

exports.simpleTest = (req, res) => {
  let replacement = {};
  reqres.commonQueryBody("simple_test()", replacement, res);
};
