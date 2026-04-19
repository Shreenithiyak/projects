import mongoose from "mongoose"

export const dbcon = async()=>{
    try{
     const file = await mongoose.connect(process.env.MONGO_URI)
       console.log(`server connected`)
    }catch(error){
        console.log("error",error)

    }
}