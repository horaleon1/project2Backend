const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  role: String,
  company: String,
  numberAmbulance: String,
  color1:String,
  color2:String,
  make: String,
  year:String,
  plate:String,
  tripulacion1:{
    name:String,
    lastName: String,
    email: String,
    cellphone: String,
  },
  tripulacion2:{
    name:String,
    lastName: String,
    email: String,
    cellphone: String,
  },
  tripulacion3:{
    name:String,
    lastName: String,
    email: String,
    cellphone: String,
  }
})

const UserAmbulance = mongoose.model("UserAmbulance", UserSchema);
module.exports = UserAmbulance;