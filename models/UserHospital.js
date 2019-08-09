const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  role: String,
  hospitalName: String,
  address: {
    street: String,
    number: String,
    neighborhood: String,
    postalCode: String,
    city: String
  }
});

const UserHospital = mongoose.model("UserHospital", UserSchema);
module.exports = UserHospital;
