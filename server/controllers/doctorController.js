// import BookingSchema from "../";
import Booking from "../models/BookingSchema.js"; // ✅ Make sure this import exists

import Doctor from "../models/DoctorSchema.js";

// export const updateDoctor = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const updateDoctor = await Doctor.findByIdAndUpdate(
//       id,
//       { $set: req.body },
//       { new: true }
//     );

//     res.status(200).json({
//       success: true,
//       message: "Successfully updated",
//       data: updateDoctor,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "failed to update",
//     });
//   }
// };


































// export const updateDoctor = async (req, res) => {
//   const id = req.params.id;

//   try {
//     // Remove password from request body if it exists and is empty
//     const updateData = { ...req.body };
//     if (updateData.password === "") {
//       delete updateData.password;
//     }

//     const updateDoctor = await Doctor.findByIdAndUpdate(
//       id,
//       { $set: updateData },
//       { new: true }
//     ).select("-password");  // Don't return password in response

//     res.status(200).json({
//       success: true,
//       message: "Successfully updated",
//       data: updateDoctor,
//     });
//   } catch (err) {
//     console.error("Error updating doctor:", err);
//     res.status(500).json({
//       success: false,
//       message: "Failed to update",
//       error: err.message,
//     });
//   }
// };















export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    // First, get the current doctor data
    const currentDoctor = await Doctor.findById(id);
    
    if (!currentDoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found"
      });
    }

    // Create update data from request body
    const updateData = { ...req.body };
    
    // IMPORTANT: Never allow password updates through this endpoint
    // This ensures the password field is never modified unintentionally
    delete updateData.password;
    
    // Log what's being updated (for debugging)
    console.log("Updating doctor with data:", JSON.stringify(updateData));

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (err) {
    console.error("Error updating doctor:", err);
    res.status(500).json({
      success: false,
      message: "Failed to update",
      error: err.message,
    });
  }
};



export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
    });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).populate('reviews').select("-password");

    res.status(200).json({
      success: true,
      message: "Doctor found",
      data: doctor,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "no Doctor found",
    });
  }
};



export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: 'approved',
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({}).select("-password");
    }

    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: doctors,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Doctors not found",
    });
  }
};




export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId; // ✅ Corrected variable name

  try {
    const doctor = await Doctor.findById(doctorId).select("-password");

    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({
      success: true,
      message: 'Profile info is getting',
      data: { ...doctor._doc, appointments },
    });
  } catch (err) {
    console.error("Error in getDoctorProfile:", err);
    res.status(500).json({
      success: false,
      message: "Something went wrong, cannot get user profile",
    });
  }
};







