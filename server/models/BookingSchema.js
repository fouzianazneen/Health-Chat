import mongoose from "mongoose";
import { features } from "process";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: String, required: true },
    // appointmentDate: {
    //   type: Date,
    //   required: true,
    // },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.pre(/^find/, function(next){
  this.populate("user").populate({
    path:'doctor',
  select:'name',
})
next();
  })
  

export default mongoose.model("Booking", bookingSchema);




// export default mongoose.model*("Booking", bookingSchema);

// export deafult mongoose.model from ("booking", bookingSchema);..

// server got a heart attack and then we went to the all the topics of the world to conquer the healthchat is designed to simplify healthy life style while the streamlines patient interactions. the queires, and receive reminders  improves its responses based on used adaptable for future features such as healthchat aims to enhance healthchat satisfaction aims to enhance healthchat and receive reminders through the improvement its responses based on userr and adaptable for future features such as streamlines patient interactions. the queries and receive reminders through improves its responses 
// )