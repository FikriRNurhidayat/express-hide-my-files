const fs = require("fs");
const path = require("path");
const express = require("express");
const morgan = require("morgan");

// Import configuration
const {
  VERY_SECRET_ACCESS_TOKEN,
  PORT,
  PUBLIC_DIRECTORY,
  PROTECTED_DIRECTORY
} = require("./config")

// Import authorize middleware
const authorize = require("./authorize");

// Initialize express
const app = express();

// Use morgan request logger
app.use(morgan("dev"));

// Set public directory
app.use(express.static(PUBLIC_DIRECTORY));

// Setup cannot see me without access token endpoint
// To retrieve something inside PROTECTED_DIRECTORY
app.get("/cannot-see-me-without-access-token/:filename", authorize, (req, res) => {
  // Set filePath based on filename parameter
  const filePath = path.join(PROTECTED_DIRECTORY, req.params.filename);

  // Check if the file does exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) res.status(404).send("File does not exists!");

    res.sendFile(filePath);
  });
});

// Default route
app.use((req, res) => res.redirect("/industrial-society-and-its-future.pdf"));

// Spin up server
app.listen(PORT, () => {
  console.log("Listening on port %i", PORT);
  console.log(
    "You can access http://localhost:%i/industrial-society-and-its-future.pdf",
    PORT
  );
  console.log(
    "You can also access the protected PDF via http://localhost:%i/cannot-see-me-without-access-token/the-gay-science.pdf",
    PORT
  );
  console.log(
    'By passing "Bearer %s" as Authorization header value',
    VERY_SECRET_ACCESS_TOKEN
  );
});
