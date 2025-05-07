// // import Appointment from "../models/Appointment.js";
// //      export const bookAppointment = async (req, res) => {
// //       const { userId, doctorId, time } = req.body;
// //        try {
// //          const appointment = await Appointment.create({ userId, doctorId, time });
// //        res.status(201).json(appointment);
// //       } catch (err) {
// //         res.status(500).json({ error: err.message });
// //        }
// //      };
// // export const getAppointments = async (req, res) => {
// //        const { userId } = req.query;
// //      const appointments = await Appointment.find({ userId }).populate("doctorId");
// //       res.json(appointments);
// //     };






// export const getAppointments = async (req, res) => {
//   const { userId } = req.query;

//   if (userId === "demo") {
//     // Return mock data for demo mode
//     return res.json([
//       { doctorId: { name: "Dr. A", specialization: "Cardiologist" }, time: "10:00 AM" },
//       { doctorId: { name: "Dr. B", specialization: "Dentist" }, time: "11:30 AM" }
//     ]);
//   }

//   try {
//     const appointments = await Appointment.find({ userId }).populate("doctorId");
//     res.json(appointments);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };







// controllers/appointmentController.js

export const bookAppointment = async (req, res) => {
  const { userId, doctorId, time } = req.body;
  try {
    const appointment = await Appointment.create({ userId, doctorId, time });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAppointments = async (req, res) => {
  const { userId } = req.query;
  try {
    const appointments = await Appointment.find({ userId }).populate("doctorId");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
