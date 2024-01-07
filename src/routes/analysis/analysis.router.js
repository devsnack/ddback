const express = require("express");
const asyncHanlder = require("express-async-handler");
const {
  getTotalAmountOrders,
  getTotalGains,
  getObjectif,
} = require("./analysis.controller");
const { protect } = require("../auth/auth.controller");

const analysisRouter = express.Router();
// ordersRouter.use(asyncHanlder(protect));

analysisRouter.get("/totalamountsorders", asyncHanlder(getTotalAmountOrders));
analysisRouter.get("/totalgains", asyncHanlder(getTotalGains));
analysisRouter.get("/objectif/:id", asyncHanlder(getObjectif));

// usersRouter.delete("/:id", httpAbortLaunch);

module.exports = analysisRouter;
