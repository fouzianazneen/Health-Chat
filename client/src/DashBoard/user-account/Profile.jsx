
// import  { useState, useEffect } from "react";
// import {  useNavigate } from "react-router-dom";
// import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";

// import { BASE_URL, token } from "../../config.js";
// import { toast } from "react-toastify";
// import HashLoader from 'react-spinners/HashLoader';

// const Profile = ({user}) => {


//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     bloodType: "",
//     gender: "female",
//     photo: null,
//   });

//   useEffect(()=> {
//     setFormData({ name: user.name, email:user.email, photo:user.photo, gender:user.gender, bloodType: user.bloodType});
//   }, [user]);

//   const [selectedFile, setSelectedFile] = useState(null);
//   // const [previewURL, setPreviewURL] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (selectedFile && typeof selectedFile !== 'string') {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewURL(reader.result);
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   }, [selectedFile]);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileInputChange = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     setSelectedFile(file);
//     setLoading(true);
//     setUploadStatus(null);

//     try {
//       const data = await uploadImageToCloudinary(file);

//       if (data.error) {
//         throw new Error(data.error);
//       }

//       // setPreviewURL(data.url);
//       setSelectedFile(data.url);
//       setFormData(prev => ({ ...prev, photo: data.url }));

//       console.log("Image uploaded successfully:", data.url);
//       setLoading(false);
//     } catch (error) {
//       console.error("File upload error:", error);
//       setLoading(false);
//       setUploadStatus({
//         success: false,
//         message: "Failed to upload image. Please try again."
//       });
//     }
//   };



//   const submitHandler = async (event) => {
//   event.preventDefault();
//   setLoading(true);

//   try {
//     console.log("Attempting to register with:", `${BASE_URL}/Auth/register`);
    
//     const res = await fetch(`${BASE_URL}/users/${user._id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify(formData),
//       // If using self-signed certs during development:
//       // credentials: 'include'
//     });

//     // Check if response exists
//     if (!res) {
//       throw new Error("Failed to connect to server. Please check server status.");
//     }

//     const data = await res.json();
    
//     if (!res.ok) {
//       throw new Error(data.message || "Registration failed");
//     }

//     toast.success(data.message || "Registration successful!");
//     navigate('/users/profile/me');
//     setUploadStatus({
//       success: true
//       // message: "Registration successful! Redirecting to login..."
//     });

//   } catch (error) {
//     console.error("Registration error details:", error);
//     toast.error(error.message || "Network error. Please check your connection.");
//     setUploadStatus({
//       success: false,
//       message: error.message || "Registration failed. Please try again."
//     });
//   } finally {
//     setLoading(false);
//   }
// };





//   return (
//     <div className="mt-10">
//        <form onSubmit={submitHandler}>
//               {/* Name */}
//               <div className="mt-5 mb-5">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div className="mb-5">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
//                   required
//                 />
//               </div>

//               {/* Password */}
//               <div className="mb-5">
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
                  
//                 />
//               </div>

//                 <div className="mb-5">
//                 <input
//                   type="text"
//                   name="bloodType"
//                   placeholder="Blood Type"
//                   value={formData.bloodType}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
//                   required
//                 />
//               </div>

//               {/* Role and Gender */}
//               <div className="mb-5 flex items-center gap-8">
//                 <div className="flex items-center gap-3">
//                   {/* <label htmlFor="role" className="text-headingColor font-bold text-[16px]">Are you a:</label>
//                   <select
//                     name="role"
//                     id="role"
//                     value={formData.role}
//                     onChange={handleInputChange}
//                     className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-28"
//                   >
//                     <option value="patient">Patient</option>
//                     <option value="doctor">Doctor</option>
//                   </select>
//                 </div>

//                 <div className="flex items-center gap-3"> */}
//                   <label htmlFor="gender" className="text-headingColor font-bold text-[16px]">Gender:</label>
//                   <select
//                     name="gender"
//                     id="gender"
//                     value={formData.gender}
//                     onChange={handleInputChange}
//                     className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-32"
//                   >
//                     <option value="female">Female</option>
//                     <option value="male">Male</option>
//                     <option value="non-binary">Non-binary</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Upload Photo */}
//               <div className="mb-5 flex items-center gap-3">
//                 {formatData.photo && (
//                   <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
//                     <img
//                       src={formData.photo}
//                       alt="avatar preview"
//                       className="w-full h-full object-cover rounded-full"
//                     />
//                   </figure>
//                 )}

//                 <div className="relative w-[130px] h-[50px]">
//                   <input
//                     type="file"
//                     name="photo"
//                     id="customFile"
//                     accept=".jpg,.png"
//                     onChange={handleFileInputChange}
//                     className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
//                     disabled={loading}
//                   />
//                   <label
//                     htmlFor="customFile"
//                     className={`absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden ${loading ? 'bg-gray-300' : 'bg-[#0066ff46]'} text-headingColor font-semibold rounded-lg truncate cursor-pointer`}
//                   >
//                     {loading ? "Processing..." : "Upload Photo"}
//                   </label>
//                 </div>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className={`btn mt-1 w-full ${loading ? 'bg-gray-400' : 'bg-primaryColor'} text-white py-2 rounded-md`}
//                 disabled={loading}
//               >
//                 {loading ? <HashLoader size={35} color="#ffffff" /> : "Update"}
//               </button>
//             </form>
//     </div>
//   )
// }

// export default Profile









import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";
import { BASE_URL, getToken } from "../../config.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Profile = ({ user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bloodType: "",
    gender: "female",
    photo: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        photo: user.photo || null,
        gender: user.gender || "female",
        bloodType: user.bloodType || "",
        password: "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    setLoading(true);
    setUploadStatus(null);

    try {
      const data = await uploadImageToCloudinary(file);
      if (data.error) {
        throw new Error(data.error);
      }

      setSelectedFile(data.url);
      setFormData((prev) => ({ ...prev, photo: data.url }));

      console.log("Image uploaded successfully:", data.url);
      setLoading(false);
    } catch (error) {
      console.error("File upload error:", error);
      setLoading(false);
      setUploadStatus({
        success: false,
        message: "Failed to upload image. Please try again.",
      });
    }
  };

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   try {
  //     const res = await fetch(`${BASE_URL}/users/${user._id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // Authorization: `Bearer ${getToken}`,
  //         Authorization: `Bearer ${getToken()}`, 
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!res) {
  //       throw new Error("Failed to connect to server. Please check server status.");
  //     }

  //     const data = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data.message || "Update failed");
  //     }

  //     toast.success(data.message || "Profile updated successfully!");
  //     navigate("/users/profile/me");

  //     setUploadStatus({ success: true });
  //   } catch (error) {
  //     console.error("Update error:", error);
  //     toast.error(error.message || "Update failed. Please try again.");
  //     setUploadStatus({ success: false, message: error.message });
  //   } finally {
  //     setLoading(false);
  //   }
  // };




  const submitHandler = async (event) => {
  event.preventDefault();
  setLoading(true);

  try {
    const endpoint = user.role === "doctor"
      ? `${BASE_URL}/doctors/${user._id}`
      : `${BASE_URL}/users/${user._id}`;

    const res = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`, // ✅ fix
      },
      body: JSON.stringify(formData),
    });

    if (!res) throw new Error("Failed to connect to server.");

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Update failed");

    toast.success(data.message || "Profile updated successfully!");
    navigate("/users/profile/me");
    setUploadStatus({ success: true });

  } catch (error) {
    toast.error(error.message || "Update failed. Please try again.");
    setUploadStatus({ success: false, message: error.message });
  } finally {
    setLoading(false);
  }
};




  return (
    <div className="mt-10">
      <form onSubmit={submitHandler}>
        {/* Name */}
        <div className="mt-5 mb-5">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
            aria-readonly
            readOnly
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <input
            type="password"
            name="password"
            placeholder="Enter new password (optional)"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
          />
        </div>

        {/* Blood Type */}
        <div className="mb-5">
          <input
            type="text"
            name="bloodType"
            placeholder="Blood Type"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-5 flex items-center gap-3">
          <label htmlFor="gender" className="text-headingColor font-bold text-[16px]">
            Gender:
          </label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-32"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-binary">Non-binary</option>
          </select>
        </div>

        {/* Upload Photo */}
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo}
                alt="avatar preview"
                className="w-full h-full object-cover rounded-full"
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              accept=".jpg,.png"
              onChange={handleFileInputChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              disabled={loading}
            />
            <label
              htmlFor="customFile"
              className={`absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden ${
                loading ? "bg-gray-300" : "bg-[#0066ff46]"
              } text-headingColor font-semibold rounded-lg truncate cursor-pointer`}
            >
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`btn mt-1 w-full ${
            loading ? "bg-gray-400" : "bg-primaryColor"
          } text-white py-2 rounded-md`}
          disabled={loading}
        >
          {loading ? <HashLoader size={35} color="#ffffff" /> : "Update"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
