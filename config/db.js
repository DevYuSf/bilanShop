import  mongoose  from "mongoose";

const connecTODb = async()=>{
    try {
            
            const conn =await mongoose.connect(process.env.MONGO_URL);
            console.log(`connection connected to the database ${conn.connection.name}`);
            
    } catch (error) {
        console.log(error+" error wye yaa");
        
    }

}

export default connecTODb;