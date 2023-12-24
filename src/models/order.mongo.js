const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  dd: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
  },
  storeName: {
    type: String,
    required: true,
  },
  products: {
    type: [{}],
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: [0, "price should be greater than 0"],
  },
  discount: {
    amount: {
      type: Number,
      default: 0,
    },
    valid: {
      type: Boolean,
      default: false,
    },
  },

  //   customers: [String],
});

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model("Order", ordersSchema);
