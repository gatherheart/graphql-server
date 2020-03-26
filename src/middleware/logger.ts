function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next,
) {
  console.log(
    `${request.hostname} ${request.method} ${request.path} ${request.body}`,
  );
  next();
}
