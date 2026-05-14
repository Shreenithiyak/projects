import express from "express"
import dotenv  from "dotenv"
import cors from "cors"
import userRoute from "./routes/Userroute.js"
dotenv.config()
 
const app = express()
app.use(cors())
app.use(express.json())

app.use(userRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
console.log(`server connected http://localhost:${PORT}`)
})