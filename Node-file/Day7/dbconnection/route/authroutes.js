import express from 'express'
import  {firstfunc,datas}  from '../controller/authcontroller.js'


const route = express.Router()

route.post('/added',firstfunc)
route.post('/next',datas)



export default route
//http://localhost:5000/api/user/added
//http://localhost:5000/api/user/next