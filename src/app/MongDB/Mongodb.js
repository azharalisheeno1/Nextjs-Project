
import mongoose from "mongoose";
export const DBConeectFuntion=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected")
    }catch(error){
        console.log(error)
    }

}