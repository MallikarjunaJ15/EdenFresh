import mongoose from "mongoose";


console.log("Mongo URI",process.env.MONGO_URI)  
const connectToDb = async () => {
     
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectToDb;
