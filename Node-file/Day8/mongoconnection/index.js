import express from'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authenticate from './route/authroutes.js'
import { dbcon } from './conctdb/db.js'
dotenv.config()

const app =express()
app.use(cors())
app.use(express.json())

 app.use('/api/auth',authenticate)
dbcon()
const PORT= process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`sever connected http://localhost:${PORT}`)
})
//http://localhost:5000/api/auth