const LogMiddlewareStart = (req, res, next) => {
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

const LogMiddlewareEnd = (req, res, next) => {
  const endDate = new Date()
  const timeStamp = endDate - req.logData.startDate
  const { rawJson } = res
  const log = {
    ...req.logData,
    endDate,
    timeStamp,
    rawJson,
  }
  // save to database
  console.log(log)
  next()
}

module.exports = { LogMiddlewareStart, LogMiddlewareEnd }
