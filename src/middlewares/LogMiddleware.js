class LogMiddleware {
  LogMiddlewareStart(req, res, next) {
    return (req, res, next) => {
      const { body: requestBody, originalUrl: requestRoute } = req
      const startDate = new Date()
      const logData = {
        requestBody,
        requestRoute,
        startDate,
      }
      req.logData = logData
      next()
    }
  }

  LogMiddlewareEnd(req, res, next) {
    return (req, res, next) => {
      const endDate = new Date()
      const timeStamp = endDate - req.logData.startDate
      const { rawJson, statusCode } = res
      const log = {
        ...req.logData,
        endDate,
        timeStamp,
        rawJson,
        statusCode,
      }
      // save to database
      console.log(log)
      next()
    }
  }
}

const logMiddleware = new LogMiddleware()
const logMiddlewareStart = logMiddleware.LogMiddlewareStart()
const logMiddlewareEnd = logMiddleware.LogMiddlewareEnd()

module.exports = { logMiddlewareStart, logMiddlewareEnd }
