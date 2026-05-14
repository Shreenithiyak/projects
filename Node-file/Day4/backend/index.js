import dotenv from  "dotenv"
import express from "express"


dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`succucessfull express running on http://localhost:${PORT}`)

})

//what is cors
//  CORS allows different apps to talk to each other  eg: react=3000, server=5000 . CORS allow to run 

//what is server?
//A server is a machine/program that responds to requests eg: when you open google.com, your browser sends a request to google's server, and the server responds by sending back the webpage.

//what is json()
//It converts incoming data into JavaScript object, it is a middleware function that parses incoming request bodies in JSON format and makes the data available under req.body in Express applications.