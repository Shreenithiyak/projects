import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app =express()

const PORT = process.env.PORT ||4000

app.listen(PORT,()=>{
    console.log(`server connceted http://localhost:${PORT}`);
    
})


// what is cors
//CORS means Cross-Origin Resource Sharing.
// It allows frontend and backend running on different ports/domains to communicate with each other.

// what is server?
    // Server is a program/computer that listens for requests from client
    // (browser/frontend) and sends back a response.

// what is json()
//  express.json() is middleware used to convert incoming JSON data from request body into JavaScript object.
//Without it, req.body will be undefined.