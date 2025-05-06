import React from "react";

const DoctorCard = ({ doctor, onBook }) => (
  <div className="p-4 border rounded shadow-sm bg-white">
    <h3 className="text-lg font-semibold">{doctor.name}</h3>
    <p>{doctor.specialization}</p>
    <p className="text-sm mt-2 mb-2">Available: {doctor.availableTimes.join(", ")}</p>
    <button onClick={() => onBook(doctor)} className="bg-green-600 text-white px-4 py-1 rounded">Book</button>
  </div>
);

export default DoctorCard;
