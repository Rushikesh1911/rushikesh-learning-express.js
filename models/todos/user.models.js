import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // username: String,
  // email: String,
  // isactive:boolean,
  // password: String,

  username: {       
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  isactive: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: [true, "password  is  required"],
    min: [8, "Password must be at least 8 characters"],
  },
},

{timestamps : true} // this will add createdAt and updatedAt fields to the schema


);

export const User = mongoose.model("User", userSchema);

// always write this on the top of the file whatever the project may be different //
