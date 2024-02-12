import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected with host: ${connection.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
};
