import mongoose from "mongoose";

const Connection = async (username, password) => {
  // 1. Use full Atlas URI if present
  // 2. Otherwise build from username/password (for local dev)
  const URL = process.env.MONGO_URI
    ? process.env.MONGO_URI
    : "mongodb://localhost:27017/blog-website";

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected successfully`);
  } catch (error) {
    console.error("Error while connecting to the database:", error);
    process.exit(1);
  }
};

export default Connection;
