// module.exports = mongoose.model("User", new mongoose.Schema({
//      name: String,
//      email: { type: String, unique: true },
//      password: String,
//      role: { type: String, enum: ["patient", "admin"], default: "patient" }
//     }));








// server/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["patient", "admin"], default: "patient" }
});

const User = mongoose.model("User", userSchema);
export default User;
