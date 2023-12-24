const express = require("express");
const asyncHanlder = require("express-async-handler");
const {
  addNewOrder,
  getAllOrders,
  getAllProducts,
  addNewVisite,
} = require("./orders.controller");
const { protect } = require("../auth/auth.controller");

const ordersRouter = express.Router();
// ordersRouter.use(asyncHanlder(protect));

ordersRouter.get("/", asyncHanlder(getAllOrders));
ordersRouter.get("/products", asyncHanlder(getAllProducts));
ordersRouter.post("/", asyncHanlder(addNewOrder));
ordersRouter.post("/visite", asyncHanlder(addNewVisite));
// usersRouter.delete("/:id", httpAbortLaunch);

module.exports = ordersRouter;
