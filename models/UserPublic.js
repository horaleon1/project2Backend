const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  role: Number,
  name: String,
  lastName: String,
  email: String,
  password: String,
  cellphone: String,

    age: String,
    gender: String,
    maritalStatus: String,
    occupation: String,
    curp: String,
    
    address: {
      street: String,
      number: String,
      interiorNumber: String,
      neighborhood: String,
      postalCode: String,
      city: String
    },

    familyContact: {
      fullName: {
        name: String,
        lastName: String
      },
      cellphone: String
    },
    medicalInformation: {
      allergies: String,
      bloodType: String,
      inUseMedicine: String,
      isSmoker: Boolean,
      isDrinker: Boolean,
      vaccines: String,
      weight: String,
      height: String,
      familySickness: String,
      surgeries: String
    },
    familyCircle: {
      member1: {
        fullName: {
          name: String,
          lastName: String
        },
        cellphone: String,
        relationship: String
      },
      member2: {
        fullName: {
          name: String,
          lastName: String
        },
        cellphone: String,
        relationship: String
      },
      member3: {
        fullName: {
          name: String,
          lastName: String
        },
        cellphone: String,
        relationship: String
      }
    }
  
});

const UserPublic = mongoose.model("UserPublic", UserSchema);
module.exports = UserPublic;
