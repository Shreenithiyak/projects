import mongoose from "mongoose"
export const ts =async()=>{
    try{
     const af = await  mongoose.connect(process.env.MONGO_URI)
     console.log("sever done")

    }catch(e){
        console.log("error",e)
    }
} 