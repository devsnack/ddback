const express = require("express");
const storesRouter = require("./store/stores.router");
const usersRouter = require("./user/users.router");
const ordersRouter = require("./order/orders.router");

const api = express.Router();

api.use("/stores", storesRouter);
api.use("/users", usersRouter);
api.use("/orders", ordersRouter);
// api.use("/launches", launchesRouter);

module.exports = api;
