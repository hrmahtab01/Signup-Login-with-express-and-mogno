const mongoose = require ("mongoose")


const connectdb =async ()=>{
    try {
        const connect = await mongoose.connect(process.env.Db_url)
        console.log("db connected successfully");
        
    }catch (error ){
        console.log("something went wrong in db connection");
        
    }
}

module.exports = connectdb