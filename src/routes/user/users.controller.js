const user = require("../../models/user.mongo");
const bcrypt = require("bcrypt");

async function getAllUsers(req, res, next) {
  const data = await user.find().select("-userPass");
  res.send({ message: "ok", data });
}

async function addNewUser(req, res, next) {
  req.body.createdDate = new Date().toISOString();
  req.body.userPass = await bcrypt.hash(req.body.userPass, 12);
  const data = await user.create(req.body);
  res.send({ message: "Created!" });
}

module.exports = {
  getAllUsers,
  addNewUser,
};
