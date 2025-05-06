const API_BASE = "http://localhost:5000/api";

export const getDoctors = async () => {
  const res = await fetch(`${API_BASE}/appointments/my?userId=demo`);
  const data = await res.json();
  return data.map(item => item.doctorId); // Flatten to get doctor list
};

export const bookAppointment = async ({ doctorId, userId, time }, token) => {
  await fetch(`${API_BASE}/appointments/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ doctorId, userId, time }),
  });
};
