const order = require("../../models/order.mongo");
const product = require("../../models/product.mongo");
const visite = require("../../models/visite.mongo");

async function getAllOrders(req, res, next) {
  const data = await order.find();
  res.send({ status: "ok", data });
}

async function getAllProducts(req, res, next) {
  const data = await product.find();
  res.send({ data, status: "ok" });
}
async function addNewOrder(req, res, next) {
  const data = await order.create(req.body);
  res.send({ message: "Created!" });
}

async function addNewVisite(req, res, next) {
  const data = await visite.create(req.body);
  res.send({ message: "Created!" });
}

module.exports = {
  getAllOrders,
  addNewOrder,
  getAllProducts,
  addNewVisite,
};
