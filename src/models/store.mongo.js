const mongoose = require("mongoose");

// Define the enum values
const storesTypeEnum = {
  PARFUMERIE: "parfumerie",
  SUPERETTE: "superette",
  AlimentationGenerale: "alimentationgenerale",
};

const storesSchema = new mongoose.Schema({
  createdDate: {
    type: Date,
    required: true,
  },
  dd: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  storeName: {
    type: String,
    required: true,
  },
  storeOwnerName: {
    type: String,
    required: true,
  },
  storeGps: {
    type: String,
    required: true,
  },
  wilaya: {
    type: String,
    required: true,
  },
  commune: {
    type: String,
    required: true,
  },
  storeType: {
    type: String,
    enum: Object.values(storesTypeEnum),
    default: storesTypeEnum.COSMETIC,
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
module.exports = mongoose.model("Store", storesSchema);
