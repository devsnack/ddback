const express = require("express");
const asyncHanlder = require("express-async-handler");
const {
  getAllStores,
  addNewStore,
  getAvailabelStores,
} = require("./stores.controller");

const storesRouter = express.Router();

storesRouter.get("/", asyncHanlder(getAllStores));
storesRouter.post("/availabelstores", asyncHanlder(getAvailabelStores));
storesRouter.post("/", asyncHanlder(addNewStore));
// usersRouter.delete("/:id", httpAbortLaunch);

module.exports = storesRouter;
