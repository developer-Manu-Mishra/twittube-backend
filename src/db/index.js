import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async () => {
    try {
        const connectDBConfig = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`Database connected Successfully to host: ${connectDBConfig.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}