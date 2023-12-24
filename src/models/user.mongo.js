const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the enum values
const usersTypeEnum = {
  ADMIN: "admin",
  DDIRECT: "ddirect",
};

const usersSchema = new mongoose.Schema({
  createdDate: {
    type: Date,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  userType: {
    type: String,
    enum: Object.values(usersTypeEnum),
    default: usersTypeEnum.DDIRECT,
  },
  userPass: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  //   customers: [String],
});

// usersSchema.pre("save", async function (next) {
//   // Only run this function if password was actually modified
//   // if (!this.isModified("password")) return next();

//   // Hash the password with cost of 12

//   this.userPass = await bcrypt.hash(this.userPass, 12);

//   // Delete passwordConfirm field
//   // this.passwordConfirm = undefined;
//   next();
// });

usersSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model("User", usersSchema);
