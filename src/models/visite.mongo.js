const mongoose = require("mongoose");

const visitesSchema = new mongoose.Schema({
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
  location: {
    type: {
      type: String,
      enum: ["Point"],
      // required: true,
    },
    coordinates: {
      type: [Number],
      // required: true,
    },
  },

  //   customers: [String],
});

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model("visites", visitesSchema);
