const order = require("../../models/order.mongo");
const product = require("../../models/product.mongo");
const stock = require("../../models/stock.mongo");
const visite = require("../../models/visite.mongo");
const { checkStock } = require("../../utils/utils");
const mongoose = require("mongoose");

async function getAllOrders(req, res, next) {
  const data = await order.find();
  res.send({ status: "ok", data });
}

async function getAllProducts(req, res, next) {
  const data = await product.find();
  res.send({ data, status: "ok" });
}
async function addNewOrder(req, res, next) {
  const st = await stock.find({ dd: req.body.dd });
  const isValid = checkStock(st[0], req.body);

  // const data = await order.create(req.body);
  //
  let products = req.body.products.map((e) => ({
    name: e.productName,
    quantity: e.quantity,
  }));

  if (isValid) {
    // let products = req.body.products.map((e) => e.productName);
    const session = await mongoose.startSession();
    session.startTransaction();

    const data = await order.create([req.body], { session });

    for (const { name, quantity } of products) {
      console.log(name, quantity);
      let updated = await stock.updateOne(
        { dd: req.body.dd, "stock.productName": name },

        { $inc: { "stock.$.quantity": -quantity } },
        { session }
      );
      console.log(updated);
    }

    // // Update operation
    // const updatedUser = await stock.findOneAndUpdate(
    //   { dd: req.body.dd },
    //   { $set: { age: 31 } },
    //   { new: true, session }
    // );

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    console.log("Transaction committed successfully");
    return res.send({ message: "Created!" });
  }

  res.status(403).send({ message: "quantity not available" });
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
