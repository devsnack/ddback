const express = require("express");
const asyncHanlder = require("express-async-handler");
const { getAllUsers, addNewUser } = require("./users.controller");
const { login, refreshToken } = require("../auth/auth.controller");

const usersRouter = express.Router();

usersRouter.get("/", asyncHanlder(getAllUsers));
usersRouter.get("/refresh", asyncHanlder(refreshToken));
usersRouter.post("/login", asyncHanlder(login));
usersRouter.post("/", asyncHanlder(addNewUser));
// usersRouter.delete("/:id", httpAbortLaunch);

module.exports = usersRouter;
