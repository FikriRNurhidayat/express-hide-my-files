const path = require("path");

const {
  PORT = 8000,
  VERY_SECRET_ACCESS_TOKEN = "letsjustpretendthatiamanaccesstoken",
} = process.env;
const PUBLIC_DIRECTORY = path.join(__dirname, "public");
const PROTECTED_DIRECTORY = path.join(__dirname, "protected");

module.exports = {
  VERY_SECRET_ACCESS_TOKEN,
  PORT, 
  PUBLIC_DIRECTORY,
  PROTECTED_DIRECTORY,
}
