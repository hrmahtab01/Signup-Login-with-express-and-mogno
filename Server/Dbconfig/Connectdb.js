const mongoose = require ("mongoose")


const connectdb =async ()=>{
    try {
        const connect = await mongoose.connect("mongodb+srv://user:user@crud.4akof.mongodb.net/user?retryWrites=true&w=majority&appName=crud")
        console.log("db connected successfully");
        
    }catch (error ){
        console.log("something went wrong in db connection");
        
    }
}

module.exports = connectdb