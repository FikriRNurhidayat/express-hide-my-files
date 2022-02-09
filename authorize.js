const { VERY_SECRET_ACCESS_TOKEN } = require("./config")

function getTokenFromHeader(headers) {
  const bearerToken = headers.authorization;
  const accessToken = bearerToken?.split('Bearer ')[1];
  return accessToken;
}

function isTokenValid(accessToken) {
  // Use your token validation logic here
  // In this case, it will just compare the accessToken with
  // VERY_SECRET_ACCESS_TOKEN
  return accessToken === VERY_SECRET_ACCESS_TOKEN;
}

module.exports = (req, res, next) => {
  // Parse token from request header
  const accessToken = getTokenFromHeader(req.headers);

  // Check if the token is valid
  if (!isTokenValid(accessToken)) return res.status(401).send("Unauthorized");

  next();
}
