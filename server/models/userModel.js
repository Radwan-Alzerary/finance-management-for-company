import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 

    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
      
    },
    password: { 
      type: String, 
      required: true, 
      minLength: 6 
      
    },
    // role: { 
    //   type: Number, 
    //   default: 0 
      
    // },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
