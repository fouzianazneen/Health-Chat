// import mongoose from "mongoose";
// import Doctor from "./DoctorSchema";

// const reviewSchema = new mongoose.Schema(
//   {
//     doctor: {
//       type: mongoose.Types.ObjectId,
//       ref: "Doctor",
//     },
//     user: {
//       type: mongoose.Types.ObjectId,
//       ref: "User",
//     },
//     reviewText: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//       min: 0,
//       max: 5,
//       default: 0,
//     },
//   },
//   { timestamps: true }
// );


// reviewSchema.pre(/^find/, function(next){
//   this.populate({
//     path:'user',
//     select: "name photo",
//   });
//   next();

// });

// reviewSchema.statics.calcAverageRatings = async function (doctorId) {
//   // THIS POINTS TO THE CURRENT REVIEW MODEL
//   const stats = await this.aggregate([
//     {
//       $match: { doctor: doctorId }
//     },
//     {
//       $group: {
//         _id: '$doctor',
//         numOfRating: { $sum: 1 },
//         avgRating: { $avg: '$rating' }
//       }
//     }
//   ]);

//   console.log(stats);
// };

// await Doctor.findByIdAndUpdate(doctorId, {
//   totalRating: stats[0].numOfRating,
//   averageRating: stats[0].avgRating,
// })

// reviewSchema.post('save', function(){
//   this.constructor.calcAverageRatings(this.doctor)
// })

// export default mongoose.model("Review", reviewSchema);










import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// Populate user info when finding reviews
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();
});

// Static method to calculate average ratings
reviewSchema.statics.calcAverageRatings = async function (doctorId) {
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    await Doctor.findByIdAndUpdate(doctorId, {
      totalRating: stats[0].numOfRating,
      averageRating: stats[0].avgRating,
    });
  } else {
    // If no reviews remain, reset values
    await Doctor.findByIdAndUpdate(doctorId, {
      totalRating: 0,
      averageRating: 0,
    });
  }
};

// After saving a review, update the doctor rating
reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.doctor);
});

// After deleting a review, recalculate the rating
reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await doc.constructor.calcAverageRatings(doc.doctor);
  }
});

export default mongoose.model("Review", reviewSchema);
