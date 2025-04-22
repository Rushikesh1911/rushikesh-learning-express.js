import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    content:{
      type: String,
      required: true,
      
    },
    complete:{
      type: Boolean,
      default: false
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,     // // this is a reference to the User model
      ref:"User", // this is the name of the model that we are referencing
      required: true
    },

    subtodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo", 
      },
    ],  // array of sub todos
  }, {timestamps:true} 
);


export const Todo = mongoose.model("Todo", TodoSchema);