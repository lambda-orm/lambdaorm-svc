const { transports, createLogger, format } = require('winston');
// https://reflectoring.io/node-logging-winston/
// const logger = createLogger({
//   level: "debug",
//   format: format.json(),
//   transports: [new transports.Console()],
// });

// module.exports = logger;

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json(),
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error', timestamp: true }),
    new transports.File({ filename: 'combined.log', timestamp: true }),
  ],
});
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({ format: format.simple() }));
}

module.exports = logger;
