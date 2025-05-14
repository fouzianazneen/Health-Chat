import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BASE_URL} from '../config';
import { toast } from "react-toastify";
import {AuthContext } from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  
  
    const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      console.log("Attempting to login with:", `${BASE_URL}/Auth/login`);
      
      const res = await fetch(`${BASE_URL}/Auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        // If using self-signed certs during development:
        // credentials: 'include'
      });
  
      // Check if response exists
      if (!res) {
        throw new Error("Failed to connect to server. Please check server status.");
      }
  
      const result = await res.json();
      
      if (!res.ok) {
        throw new Error(result.message || "login failed");
      }


      dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result, 'login data');
  
      toast.success(result.message || "login successful!");
      navigate('/home');
      // setUploadStatus({
      //   success: true,
      //   message: "login successful! Redirecting to home..."
      // });
  
    } catch (error) {
      console.error("login error details:", error);
      toast.error(error.message || "Network error. Please check your connection.");
      // setUploadStatus({
      //   success: false,
      //   message: error.message || "login failed. Please try again."
      // });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 💌
        </h3>

        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="w-full  py-3 border border-gray-300  focus:outline-none focus:border-primaryColor"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="w-full  py-3 border border-gray-300 focus:outline-none focus:border-primaryColor"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-primaryColor text-white py-2 rounded-md"
          >
            { loading ? <HashLoader size={25} color="#fff"/> : 'Login'}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-5 text-textColor text-center">
          Don&apos;t have an account?
          <Link to="/register" className="text-primaryColor font-medium ml-1">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;