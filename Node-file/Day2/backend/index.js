import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
console.log(PORT);

const backend = http.createServer() 
backend.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})












