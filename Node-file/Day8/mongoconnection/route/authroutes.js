import express from 'express'
import {funcfirst} from '../controller/authcontroller.js'


const route = express.Router()

route.post('/routeone',funcfirst)

export default route

//http://localhost:5000/api/auth/routeone