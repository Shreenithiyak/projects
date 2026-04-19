import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import conn from './route/schroute.js'
import {ts} from './config/db.js'

dotenv.config()
const app =express()
app.use(cors())
app.use(express.json())

app.use("/api/user",conn)
ts()
const PORT =process.env.PORT  ||3000


app.listen(PORT,()=>{
    console.log(`server connected http://localhost:${PORT}`)
})


//http://localhost:5000/api/user