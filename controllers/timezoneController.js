const sendSuccessResponse = require("../responses/successResponse");

exports.sendTime = async (req, res, next) => {
  try {
    const timeZone = await req.cityName;
    const dateString = new Date().toLocaleDateString("en-US", { timeZone });
    const timeString = new Date().toLocaleTimeString("en-US", { timeZone });

    res.status(200).json(
      sendSuccessResponse("Data fetched successfully", {
        timezone: req.cityName,
        Date: dateString,
        time: timeString,
      })
    );
  } catch (err) {
    next(err);
  }
};
