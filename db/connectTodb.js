import mongoose from "mongoose";

const connectTodb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(`Connected to Mongo DB`);
  } catch (error) {
    console.log(`Failed to connect to Mongo DB`);
  }
};

export default connectTodb;
