const sendSuccessResponse = (message, data) => {
    return {
        success: true,
        message,
        result: data
    }
}
module.exports = sendSuccessResponse;