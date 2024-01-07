const order = require("../../models/order.mongo");
const product = require("../../models/product.mongo");
const visite = require("../../models/visite.mongo");
const objectif = require("../../models/objectif.mongo");

async function getTotalAmountOrders(req, res, next) {
  //
  let today = new Date().toISOString().split("T")[0];
  const data = await order.aggregate([
    {
      $addFields: {
        date: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdDate" },
        },
      },
    },
    {
      $match: {
        date: { $eq: today },
      },
    },
    {
      $group: {
        _id: "total commandes",

        total: { $sum: 1 },
      },
    },
  ]);
  res.send({ status: "ok", ...data });
}

async function getTotalGains(req, res, next) {
  let today = new Date().toISOString().split("T")[0];
  let yr = new Date().getUTCFullYear();
  let mnth = new Date().getMonth() + 1;
  const day = await order.aggregate([
    {
      $addFields: {
        date: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdDate" },
        },
      },
    },
    {
      $match: {
        date: { $eq: today },
      },
    },
    {
      $group: {
        _id: "total revenue",
        total: { $sum: "$totalPrice" },
      },
    },
  ]);
  const month = await order.aggregate([
    {
      $addFields: {
        year: { $year: "$createdDate" },
        month: { $month: "$createdDate" },
      },
    },

    {
      $match: {
        year: { $eq: yr },
        month: { $eq: mnth },
      },
    },
    {
      $group: {
        _id: "total revenue",
        total: { $sum: "$totalPrice" },
      },
    },
  ]);
  res.send({ day: day[0], month: { ...month[0] } });
}

async function getObjectif(req, res, next) {
  const data = await objectif.find({ typeObj: req.params.id });
  res.send({ data, status: "ok" });
}
module.exports = {
  getTotalAmountOrders,
  getTotalGains,
  getObjectif,
};
