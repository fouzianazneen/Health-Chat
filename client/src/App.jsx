// // // import React from "react";
// // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // import Home from "./pages/Home";
// // // import Login from "./pages/Login";
// // // import Chat from "./pages/Chat";
// // // import BookAppointment from "./pages/BookAppointment";

// // // const App = () => {
// // //   return (
// // //     <BrowserRouter>
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route path="/login" element={<Login />} />
// // //         <Route path="/chat" element={<Chat />} />
// // //         <Route path="/book" element={<BookAppointment />} />
// // //       </Routes>
// // //     </BrowserRouter>
// // //   );
// // // };

// // // export default App;









// // // client/src/routes.js
// // import React from 'react';
// // import { Routes, Route, Navigate } from 'react-router-dom';
// // import Home from './pages/Home';
// // import Login from './pages/Login';
// // import Register from './pages/Register';
// // import BookAppointment from './pages/BookAppointment';
// // import DoctorAvailability from './pages/DoctorAvailability';
// // import SymptomChecker from './pages/SymptomChecker';
// // import AppointmentHistory from './pages/AppointmentHistory';
// // import RequireAuth from './components/RequireAuth';

// // const App = () => (
// //   <Routes>
// //     <Route path="/" element={<Home />} />
// //     <Route path="/login" element={<Login />} />
// //     <Route path="/register" element={<Register />} />
// //     <Route element={<RequireAuth />}>
// //       <Route path="/appointments" element={<BookAppointment />} />
// //       <Route path="/doctors" element={<DoctorAvailability />} />
// //       <Route path="/symptom-checker" element={<SymptomChecker />} />
// //       <Route path="/appointment-history" element={<AppointmentHistory />} />
// //     </Route>
// //     <Route path="*" element={<Navigate to="/" />} />
// //   </Routes>
// // );

// // export default App;











// import React from "react";
// // import '../src/App.css';
// import "./app.css";

// import Layout from "./layout/Layout";

// function App() {
// return <Layout/>
// }

// export default App;






// 2. Fix App.jsx
import React from "react";
import Layout from "./layout/Layout";

function App() {
  return <Layout />
}

export default App;