import express from "express"
import {file} from "../controller/schcontroller.js"
const route = express.Router()

route.get ("/getdata",file)

export default route
//http://localhost:5000/api/user/getdata