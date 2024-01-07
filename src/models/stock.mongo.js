const mongoose = require("mongoose");

const stocksSchema = new mongoose.Schema({
  dd: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  stock: {
    type: [{}],
    required: true,
  },

  //   customers: [String],
});

//
module.exports = mongoose.model("Stock", stocksSchema);
