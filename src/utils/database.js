import mongoose from "mongoose";
// const DB_NAME = `tasting_note`;
// const USER_NAME = `akiran1sei`;
// const USER_PASSWD = `akiran1sei`;
// const HOST_NAME = `cluster0.dnleokd.mongodb.net`;
// const uri = `mongodb+srv://${USER_NAME}:${USER_PASSWD}@${HOST_NAME}/${DB_NAME}?retryWrites=true&w=majority`;
const uri = `mongodb+srv://akiran1sei:akiran1sei@cluster0.dnleokd.mongodb.net/tasting_note?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(uri);
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
