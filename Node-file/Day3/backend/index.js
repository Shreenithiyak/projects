import dotenv from "dotenv"
import express from "express"
import http from "http"
import {datas} from "./file.js"
import {createpath} from "./path.js"


dotenv.config()
 
const sever =http.createServer((req,res)=>{

})
const PORT = process.env.PORT 


const app = express()

datas()
createpath()
app.listen(PORT,()=>{
console.log( `succucessfull express running on http://localhost:${PORT}`)
})
