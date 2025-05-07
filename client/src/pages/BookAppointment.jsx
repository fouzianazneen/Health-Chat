import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { getDoctors, bookAppointment } from "../services/api";

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  const handleBook = async (doctor) => {
    const time = prompt(
      "Enter a time from available slots:\n" + doctor.availableTimes.join(", ")
    );
    const token = localStorage.getItem("token");
    const userId = "demo-user"; // In real case decode JWT
    await bookAppointment({ doctorId: doctor._id, userId, time }, token);
    alert("Appointment booked!");
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {doctors.map((doc) => (
        <DoctorCard key={doc._id} doctor={doc} onBook={handleBook} />
      ))}
    </div>
  );
};

export default BookAppointment;
