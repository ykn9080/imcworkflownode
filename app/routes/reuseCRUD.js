/*
재사용가능 mongoose CRUD 기능과 model처리
재사용가능한 CRUD는 ./controller/reuseCRUD.js
모든 모델을 한곳에서 처리함 ./model/models.js
*/

const crud = require("../controllers/reuseCRUD");
// const query = require("../controllers/query");
// const proc = require("../controllers/procedure");
const models = require("../models");
const auth = require("../middleware/auth");
const moment = require("moment");

module.exports = (app) => {
  //  const models = require("../models");
  //for project router
  const removes = [];
  const auths = [];
  // const removes = ["alert", "user_alert", "notice"];
  // const auths = ["rest"];
  Object.keys(models).map((k, i) => {
    if (removes.indexOf(k) === -1) {
      if (auths.indexOf(k) === -1) {
        app.use(`/api/${k}`, modifyData(k), crud(models[k]));
      } else app.use(`/api/${k}`, auth, modifyData(k), crud(models[k]));
    }
  });

  /**
  entitiy별로 별도의 가공이 필요한 경우 사용하는 middleware
 */
};
const modifyData = (modelname) => {
  return function (req, res, next) {
    switch (modelname) {
      case "stopworking":
        if (req.method === "GET") {
          next();
        }
        //update
        else if (req.method === "PUT") {
          req.body.updated_at = Date.now();
          next();
        }
        //create
        else if ((req.method = "POST")) {
          req.body.created_at = Date.now();
          req.body.updated_at = null;
          console.log(req.body);
          next();
        }

        break;

      //   case "bus":
      //     if (req.method === "DELETE")
      //       res.send("차량정보 삭제금지 update로 isrun=0로 변경하세요.");
      //     else next();
      //     break;
      //   case "busArrivalStation":
      //     if (req.method === "GET") proc.getBusArrivalStation(req, res);
      //     else next();
      //     break;
      //   case "work":
      //     switch (req.method) {
      //       case "GET":
      //         if (Object.keys(req.params).length > 0)
      //           query.getWorkAddShift(req, res);
      //         else next();
      //         break;
      //       // case "POST":
      //       //   break;
      //       default:
      //         next();
      //     }
      //     break;
      //   case "motionCapture":
      //     switch (req.method) {
      //       case "POST":
      //         req.body.detectionTime = moment(req.body.detectionTime).format(
      //           "YYYY-MM-DD HH:mm:ss"
      //         );

      //         next();
      //         // if (Object.keys(req.params).length > 0)
      //         //   query.getWorkAddShift(req, res);
      //         // else next();
      //         break;

      //       default:
      //         next();
      //     }
      //     break;
      default:
        next();
        break;
    }
  };
};
