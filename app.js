const express = require("express");
const app = express();

app.use(express.json());

const timezone = require("./routes/timezone");

app.use("/api", timezone);

app.use(async (err, req, res, next) => {
  return res
    .status(500)
    .json({ success: false, message: "Internal server Error !" });
});

module.exports = app;
