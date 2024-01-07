const stockMongo = require("../../models/stock.mongo");

async function getStock(req, res, next) {
  const stock = await stockMongo.find({ dd: req.params.id });
  res.send({ ...stock, status: "ok" });
}

async function updateStock(req, res, next) {
  const data = await stock.find({ dd: req.params.id });
  res.send({ data, status: "ok" });
}
module.exports = {
  updateStock,
  getStock,
};
