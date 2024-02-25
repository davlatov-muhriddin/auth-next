import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URI) {
    return console.error("MONGO_URI is not defined");
  }

  if (isConnected) {
    return;
  }

  try {
    const options: ConnectOptions = {
      dbName: "Auth",
      autoCreate: true,
    };

    await mongoose.connect(process.env.MONGO_URI, options);

    isConnected = true;
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connected to database");
  }
};
