module.exports = mongoose.model("Appointment", new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
      time: String,
      status: { type: String, default: "pending" }
        }));