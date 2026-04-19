import user from "../model/schmodule.js"

export const file = async(req,res)=>{
   
    console.log(req)
    try{
        res.status(200).json({
        message: "Data received",
        data: req.body
    })

    }catch(e){
        console.log("error",e)
    }
}