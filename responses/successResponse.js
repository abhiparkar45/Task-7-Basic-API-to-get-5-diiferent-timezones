const sendSuccessResponse = (message, result) => {
  return {
    success: true,
    message,
    result,
  };
};
module.exports = sendSuccessResponse;
