import mongoose from'mongoose'

const apppro = new mongoose.Schema({
    userID:{
        type: String,
        required:true,
        unique:true
    },
    username:{      
         type: String,
        required:true,
        unique:true
    },
    usernumer:{      
         type: Number,
        required:true,
        unique:true
    },
    // useremail:{      
    //      type: String,
    //     required:true,
    //     unique:true
    // },
        createdAT:{      
        type: String,
        default:"ADMIN",

    },
        updatedAT:{      
        type: String,
        default:"ADMIN",
    }   
},{timestamps:true})

const authmodel=mongoose.model('authmodel',apppro)
export default authmodel



