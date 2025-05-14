// import React from 'react'
// import Home from '../pages/Home';
// import Services from '../pages/Services';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';
// import Contact from '../pages/Contact';
// import Doctors from '../pages/Doctors/Doctors';
// import DoctorDetails from '../pages/Doctors/DoctorDetails';

// import { Routes, Route} from 'react-router-dom'
// const Routers = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/home' element={<Home/>} />
//       <Route path='/doctors' element={<Doctors/>} />
//       <Route path='/doctors/:id' element={<DoctorDetails/>} />
//       <Route path='/login' element={<Login/>} />
//       <Route path='/register' element={<Signup/>} />
//       <Route path='/contact' element={<contact/>} />
//       <Route path='/services' element={<Services/>} />

//     </Routes>
//   );
// }

// export default Routers

// 4. Create a proper Routers.jsx file in routes folder
// routes/Routers.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import MyAccount from "../DashBoard/user-account/MyAccount";
import Dashboard from "../DashBoard/doctor-account/Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            {" "}
            <MyAccount />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            {" "}
            <Dashboard />{" "}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
