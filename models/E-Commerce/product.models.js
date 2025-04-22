import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true,

    },
    price:{
      type: Number,
      required: true,
      default:0,
    },
    description:{
      type: String,
      required: true,
    },
    productImage:{
      type: String,
      required: true,
    },
    category:{
      type: mongoose.Schema.Types.ObjectId,     // // this is a reference to the Category model
      ref:"Category", // this is the name of the model that we are referencing
      required: true
    },

    stock:{
      type: Number,
      required: true,
      default:0,
    },
    rating:{
      type: Number,
      default:0,
    },
    owner:{
      type : mongooose.Schema.Types.ObjectId,
      ref:"User", // this is the name of the model that we are referencing
      required: true
    }

  },{timestamps:true});

  export const Product = mongoose.model("Product", productSchema);