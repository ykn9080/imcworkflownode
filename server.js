var createError = require("http-errors");
var express = require("express");
var path = require("path");
const cors = require("cors");

require("dotenv").config({
  path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`),
});
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require("./app/routes/index");
// var usersRouter = require("./app/routes/users");

var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "./app/views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

require("./app/routes")(app);
require("./swagger")(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// set port, listen for requests
const PORT = process.env.LOCAL_PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
