const mongoose = require("mongoose");

const objectifsSchema = new mongoose.Schema({
  typeObj: {
    type: String,
    required: true,
  },
  dayObj: {
    type: Number,
    required: true,
  },
  monthObj: {
    type: Number,
    required: true,
  },

  //   customers: [String],
});

//
module.exports = mongoose.model("Objectif", objectifsSchema);
