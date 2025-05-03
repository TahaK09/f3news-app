import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Connect to DB"));
  await mongoose.connect(`${process.env.DB_URL}/user-auth`);
};

export default connectDB;
