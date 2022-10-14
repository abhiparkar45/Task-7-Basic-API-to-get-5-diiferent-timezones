const sendSuccessResponse = require("../responses/successResponse");

exports.sendTime = async (req, res) => {
    const timeZone = req.cityName;
    const data = new Date(new Date(new Date()).toLocaleString('en-US', { timeZone }));
    const result = sendSuccessResponse('Data fetched successfully', {
        timezone: req.cityName,
        Date: data.toLocaleDateString(),
        time: data.toLocaleTimeString()
    })
    res.status(200).json(result)
}