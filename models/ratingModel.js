import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        default :0
    }
    
    
})

export default ratingSchema;