// // // import React from "react";
// // // import ReactDOM from "react-dom/client";
// // // import App from "./App.jsx";
// // // import "./index.css";

// // // ReactDOM.createRoot(document.getElementById("root")).render(
// // //   <React.StrictMode>
// // //     <App />
// // //   </React.StrictMode>
// // // );

// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import { BrowserRouter } from 'react-router-dom';
// // import App from './App';
// // import "../src";

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <App />
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import './app.css';
// import { BrowserRouter } from "react-router-dom";

// // ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// 1. Fix main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />
      <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
