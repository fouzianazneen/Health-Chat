



import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import authRoute from './Routes/auth.js';
import authRoute from './Routes/auth.js'; // case-sensitive path
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import reviewRoute from './Routes/review.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Define CORS options
const corsOptions = {
  origin: true,
  credentials: true,
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

// Root route
app.get("/", (req, res) => {
  res.send("API is working");
});

// MongoDB connection
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB database is connected");
  } catch (err) {
    console.error("MongoDB database connection failed:", err.message);
  }
};

// Start server
app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});
