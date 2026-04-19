import mongoose from "mongoose"

export const condb = async ()=>{
    try{
       const con =await mongoose.connect(process.env.MONGO_URI)
       console.log(`server connected ${con.connection.host}`)

    }catch(error){
  console.log(error)
    }
}

export default condb