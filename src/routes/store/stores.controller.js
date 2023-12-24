const store = require("../../models/store.mongo");

async function getAllStores(req, res, next) {
  const data = await store.find();
  res.send({ message: "ok", data });
}

async function getAvailabelStores(req, res, next) {
  console.log(req.body);
  const data = await store.find({
    wilaya: req.body.wilaya,
    commune: req.body.commune,
  });
  res.send({ message: "ok", data });
}

async function addNewStore(req, res, next) {
  req.body.createdDate = new Date().toISOString();

  const data = await store.create(req.body);

  res.send({ message: "Created!" });
}

module.exports = {
  getAllStores,
  addNewStore,
  getAvailabelStores,
};
