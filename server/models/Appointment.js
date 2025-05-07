// module.exports = mongoose.model("Appointment", new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
//       time: String,
//       status: { type: String, default: "pending" }
//         }));









// server/models/Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  time: String,
  status: { type: String, default: "pending" }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
