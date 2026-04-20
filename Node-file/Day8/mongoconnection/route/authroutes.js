import express from 'express'
import { funcfirst, funcsec } from '../controller/authcontroller.js'

const route = express.Router()

route.post('/routeone', funcfirst)
route.get('/routetwo/:id', funcsec)
export default route

//  http://localhost:5000/api/auth/routeone 
// http://localhost:5000/api/auth/routetwo/123