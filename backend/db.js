import { connect, set } from "mongoose";

const connectToMongoDB = async () => {
  try {
    set("strictQuery", false);
    const conn = await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error while connecting to MongoDB ${error}`);
    process.exit(1);
  }
};

export default connectToMongoDB;
