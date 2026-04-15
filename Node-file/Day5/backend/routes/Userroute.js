import express from "express"
const router = express.Router()
import {getUsers,createUser,getUserById} from "../controller/Userconntroller.js"

router.get("/api/users", getUsers)
router.post("/api/user", createUser)
router.get("/api/users/:id", getUserById);


export default router

//http://localhost:5000/api/users
//http://localhost:5000/api/user
//http://localhost:5000/api/users/:id