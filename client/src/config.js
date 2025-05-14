// export const BASE_URL = "http://localhost:8080/api/v1";
// export const token = localStorage.getItem('token');







// ✅ DO THIS INSTEAD (dynamic getter)
export const BASE_URL = "http://localhost:8080/api/v1";

export const getToken = () => localStorage.getItem('token');
