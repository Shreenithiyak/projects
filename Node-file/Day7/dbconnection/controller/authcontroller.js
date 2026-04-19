import authmodel from'../model/authmodel.js'




export const firstfunc = async (req,res)=>{

try{

console.log(req.body)
res.status(200).json({msg:"success"})
}catch(e){

console.log("error",e)
}
}

export default firstfunc




export const datas =async (req,res)=>{
   
    try{
   console.log(req)
   const{userID,username,usernumber}=req.body
   const newdata = await authmodel.create(req.body)
   res.status(200).json({msg:"done",newdata})
    }catch(e){
   console.log("server error",e)
    }
}

