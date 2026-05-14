import user from "../module/schmodule.js"

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


export const datalink = async(req,res)=>{
    try{
        const {id}= req.params
        const data = await user.find({id})
        res.status(200).json(data)
    }catch(e){
        console.log("error",e)
    }
}