// module.exports = mongoose.model("Doctor", new mongoose.Schema({
//      name: String,
//      specialization: String,
//        availableTimes: [String]
//    }));




// server/models/Doctor.js
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  availableTimes: [String]
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
