import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product", // this is the name of the model that we are referencing
    required: true
  },
  quantity:{
    type: Number,
    required: true,
    default:1,
  },
})
const orderSchema  = new mongoose.Schema(
  {
    orderPrice:{
      type: Number,
      required: true,
      default:0,
    },
    coustmer:{
      type: mongoose.Schema.Types.ObjectId,     // // this is a reference to the User model
      ref:"User", // this is the name of the model that we are referencing
      required: true
    },
    oderItems:{
      type:[orderItemSchema],
    },
    adress:{
      type: String,
      required: true,
    },
    status:{
      type:String,
      Enum:["Pending","Shipped","Delivered","Cancelled"],
      default:"Pending",
    }
  },{timestamps:true})

export const Order  = mongoose.model("Order", orderSchema); 