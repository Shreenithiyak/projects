import express from "express"
import dotenv from"dotenv"
import cors from "cors"
import checking from "./route/authroutes.js"
import condb from "./condb/db.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/user',checking)

condb()


const PORT = process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log(`server connected http://localhost:${PORT}`)
})

//http://localhost:5000/api/user