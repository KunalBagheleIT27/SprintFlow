import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    // Don't fail startup when no Mongo URI is provided (useful for local UI smoke tests).
    console.warn("MONGO_URI not set — skipping MongoDB connection (running in UI-only mode).");
    return;
  }

  try {
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    // Do not exit the process here to allow the server to start for frontend smoke tests.
  }
};

export default connectDB;