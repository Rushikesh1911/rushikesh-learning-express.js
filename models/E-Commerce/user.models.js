import mongoose from "mongoose";

const userSchema = new mongoose.Schem(
  {
    username:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password:{
      type: String,
      required: true,
      min: [8, "Password must be at least 8 characters"],
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    isactive:{
      type: Boolean,
      default: true,
    },
  },{timestamps:true})

  export const User = mongoose.model("User", userSchema);