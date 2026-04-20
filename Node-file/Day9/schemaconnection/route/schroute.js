import express from "express"
import {file,datalink} from "../controller/schcontroller.js"
const route = express.Router()

route.post ("/getdata",file)
route.get ("/getlink/:id",datalink)

export default route
//http://localhost:5000/api/user/getdata
//http://localhost:5000/api/user/getlink/745