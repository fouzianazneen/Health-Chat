import Appointment from "../models/Appointment.js";
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
     const appointments = await Appointment.find({ userId }).populate("doctorId");
      res.json(appointments);
    };