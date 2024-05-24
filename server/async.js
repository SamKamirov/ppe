const { sendErrorMessage } = require("./utils/utils")

const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
            sendErrorMessage(res, "Error!");
        }
    }
}

module.exports = asyncWrapper;