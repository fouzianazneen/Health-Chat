     import mongoose from "mongoose";
      const connectDB = () => {
       mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"));
     };
    export default connectDB;