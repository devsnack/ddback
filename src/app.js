const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const morgan = require("morgan");

const api = require("./routes/api");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(
  cors({
    origin: ["https://ddui.vercel.app", "http://localhost:3000"],
    // origin: "http://localhost:3000",
    // credentials: true,
  })
);
// app.use(morgan("combined"));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//   GLOBAL ERORR HANDLING MIDDLEWARE FUNCTION
app.use(errorHandler);
module.exports = app;
