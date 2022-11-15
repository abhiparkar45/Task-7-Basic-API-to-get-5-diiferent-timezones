const countries = require("../countries/countries");
const failedResponse = require("../responses/failedResponse");

const checkInput = async (req, res, next) => {
  const cityname = await req.params.cityName;
  if (!cityname) {
    return res.status(400).json(failedResponse("Please provide city name !"));
  }
  const cityName = cityname.toLowerCase();
  if (cityName in countries) {
    req.cityName = countries[cityName];
    next();
  } else {
    return res
      .status(400)
      .json(failedResponse("Invalid Input! Please check input value !"));
  }
};
module.exports = checkInput;
