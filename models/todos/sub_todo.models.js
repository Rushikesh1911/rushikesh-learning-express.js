import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    type:{
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







  }, {timestamps:true} // this will add createdAt and updatedAt fields to the schema);
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);