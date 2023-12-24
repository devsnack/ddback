const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  idProduct: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
    default: "",
  },

  //   customers: [String],
});

//
module.exports = mongoose.model("Product", productsSchema);
