import express from "express";
import connecTODb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connecTODb();
const PORT=process.env.PORT
app.use(express.json())

app.use('/api/users/',userRoutes);
app.use('/api/products',productRoutes);

app.listen(PORT,()=>{
    console.log(`Server is lisning on port ${PORT}`);
    
});