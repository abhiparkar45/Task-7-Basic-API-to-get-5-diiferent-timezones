const countries = require('../countries/countries');
const failedResponse = require("../responses/failedResponse")

const checkInput = (req,res,next) => {
    const cityName = req.params.cityName.toLowerCase();
    if(cityName in countries){
        req.cityName = countries[cityName];
        next();
    }
    else{
        const result = failedResponse("Invalid Input! Please check input value !");
        res.status(400).json(result);
    }  
}
module.exports = checkInput;