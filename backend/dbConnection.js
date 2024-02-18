import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const dbConnect = await mongoose.connect(
      "mongodb://0.0.0.0:27017/demotest"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.log("@@", err);
  }
};
