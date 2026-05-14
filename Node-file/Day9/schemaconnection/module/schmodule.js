import mongoose from "mongoose"

const list = new mongoose.Schema({
        username:{
        type:"String",
        required:true,
        unique:true
    },
    userage:{
        type:"Number",
        required:true,
        unique:true
    },
      createdAT:{
        type:"String",
        default:"BYME"
      },
 updatedAT:{
        type:"String",
        default:"BYME"
 }



},{timestamps:true})
 const user =mongoose.model("user",list)
 export default user
