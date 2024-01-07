const express = require("express");
const asyncHanlder = require("express-async-handler");
const { getStock } = require("./stock.controller");
const { protect } = require("../auth/auth.controller");

const stockRouter = express.Router();
// ordersRouter.use(asyncHanlder(protect));

stockRouter.get("/:id", asyncHanlder(getStock));

module.exports = stockRouter;
