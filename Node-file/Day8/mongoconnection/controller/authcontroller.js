export const funcfirst = async(req,res)=>{
console.log(req.body)
    res.status(200).json({
        message: "Data received",
        data: req.body
    })


}

export default funcfirst