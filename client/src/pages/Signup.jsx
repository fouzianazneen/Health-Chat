
// // // // import React, { useState, useEffect } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import uploadImageToCloudinary from "../utils/uploadCloudinary";
// // // // import signupImg from "../assets/images/signup.gif";
// // // // import avatar from "../assets/images/avatar-icon.png";

// // // // const Signup = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     password: "",
// // // //     role: "patient",
// // // //     gender: "female",
// // // //     photo: null,
// // // //   });

// // // //   const [selectedFile, setSelectedFile] = useState(null);
// // // //   const [previewURL, setPreviewURL] = useState("");

// // // //   useEffect(() => {
// // // //     if (selectedFile) {
// // // //       const reader = new FileReader();
// // // //       reader.onloadend = () => {
// // // //         setPreviewURL(reader.result);
// // // //         setFormData((prev) => ({ ...prev, photo: selectedFile }));
// // // //       };
// // // //       reader.readAsDataURL(selectedFile);
// // // //     }
// // // //   }, [selectedFile]);

// // // //   const handleInputChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   // const handleFileInputChange = (e) => {

// // // //   //   const file = e.target.files[0];
// // // //   //   if (file) {
// // // //   //     setSelectedFile(file);
// // // //   //   }
// // // //   //   const data = await uploadImageToCloudinary(file);
// // // //   // };



// // // //   const handleFileInputChange = async (e) => {
// // // //   const file = e.target.files[0];
// // // //   if (file) {
// // // //     setSelectedFile(file);
// // // //     const data = await uploadImageToCloudinary(file);
// // // //     // Do something with the data if needed
// // // //     console.log("Uploaded file info:", data);
// // // //   }
// // // // };


// // // //   const submitHandler = async (event) => {
// // // //     console.log(formData);
// // // //     event.preventDefault();

// // // //     try {
// // // //       // Example submission logic: you can customize this
// // // //       const payload = new FormData();
// // // //       payload.append("name", formData.name);
// // // //       payload.append("email", formData.email);
// // // //       payload.append("password", formData.password);
// // // //       payload.append("role", formData.role);
// // // //       payload.append("gender", formData.gender);
// // // //       if (formData.photo) {
// // // //         payload.append("photo", formData.photo);
// // // //       }

// // // //       // Example: replace this with real API call
// // // //       console.log("Submitting form data:");
// // // //       for (const pair of payload.entries()) {
// // // //         console.log(pair[0] + ": ", pair[1]);
// // // //       }

// // // //       // await axios.post("/api/signup", payload);

// // // //     } catch (error) {
// // // //       console.error("Signup failed:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="px-5 xl:px-0">
// // // //       <div className="max-w-[1170px] mx-auto">
// // // //         <div className="grid grid-cols-1 lg:grid-cols-2">
// // // //           {/* Image Box */}
// // // //           <div className="hidden lg:block bg-primaryColor rounded-l-lg">
// // // //             <figure className="rounded-l-lg">
// // // //               <img src={signupImg} alt="" className="w-full rounded-l-lg" />
// // // //             </figure>
// // // //           </div>

// // // //           {/* Signup Form */}
// // // //           <div className="rounded-l-lg lg:pl-16 py-10">
// // // //             <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
// // // //               Create an <span className="text-primaryColor">account</span>
// // // //             </h3>

// // // //             <form onSubmit={submitHandler}>
// // // //               {/* Name */}
// // // //               <div className="mb-5">
// // // //                 <input
// // // //                   type="text"
// // // //                   name="name"
// // // //                   placeholder="Enter your name"
// // // //                   value={formData.name}
// // // //                   onChange={handleInputChange}
// // // //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
// // // //                   required
// // // //                 />
// // // //               </div>

// // // //               {/* Email */}
// // // //               <div className="mb-5">
// // // //                 <input
// // // //                   type="email"
// // // //                   name="email"
// // // //                   placeholder="Enter your email"
// // // //                   value={formData.email}
// // // //                   onChange={handleInputChange}
// // // //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
// // // //                   required
// // // //                 />
// // // //               </div>

// // // //               {/* Password */}
// // // //               <div className="mb-5">
// // // //                 <input
// // // //                   type="password"
// // // //                   name="password"
// // // //                   placeholder="Enter your password"
// // // //                   value={formData.password}
// // // //                   onChange={handleInputChange}
// // // //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
// // // //                   required
// // // //                 />
// // // //               </div>



// // // // {/* Role and Gender on one line with compact widths */}
// // // // <div className="mb-5 flex items-center gap-8">
// // // //   {/* Role */}
// // // //   <div className="flex items-center gap-3">
// // // //     <label
// // // //       htmlFor="role"
// // // //       className="text-headingColor font-bold text-[16px] leading-7 whitespace-nowrap"
// // // //     >
// // // //       Are you a:
// // // //     </label>
// // // //     <select
// // // //       name="role"
// // // //       id="role"
// // // //       value={formData.role}
// // // //       onChange={handleInputChange}
// // // //       className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-28"
// // // //     >
// // // //       <option value="patient">Patient</option>
// // // //       <option value="doctor">Doctor</option>
// // // //     </select>
// // // //   </div>

// // // //   {/* Gender */}
// // // //   <div className="flex items-center gap-3">
// // // //     <label
// // // //       htmlFor="gender"
// // // //       className="text-headingColor font-bold text-[16px] leading-7"
// // // //     >
// // // //       Gender:
// // // //     </label>
// // // //     <select
// // // //       name="gender"
// // // //       id="gender"
// // // //       value={formData.gender}
// // // //       onChange={handleInputChange}
// // // //       className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-32"
// // // //     >
// // // //       <option value="female">Female</option>
// // // //       <option value="male">Male</option>
// // // //       <option value="non-binary">Non-binary</option>
// // // //     </select>
// // // //   </div>
// // // // </div> 





// // // //               {/* Upload Photo */}
// // // //               <div className="mb-5 flex items-center gap-3">
// // // //                 <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
// // // //                   <img
// // // //                     src={previewURL || avatar}
// // // //                     alt="avatar preview"
// // // //                     className="w-full h-full object-cover rounded-full"
// // // //                   />
// // // //                 </figure>

// // // //                 <div className="relative w-[130px] h-[50px]">
// // // //                   <input
// // // //                     type="file"
// // // //                     name="photo"
// // // //                     id="customFile"
// // // //                     accept=".jpg,.png"
// // // //                     onChange={handleFileInputChange}
// // // //                     className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
// // // //                   />
// // // //                   <label
// // // //                     htmlFor="customFile"
// // // //                     className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
// // // //                   >
// // // //                     Upload Photo
// // // //                   </label>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Submit Button */}
// // // //               <button
// // // //                 type="submit"
// // // //                 className="btn w-full bg-primaryColor text-white py-2 rounded-md"
// // // //               >
// // // //                 Register
// // // //               </button>
// // // //             </form>

// // // //             {/* Redirect to Login */}
// // // //             <p className="mt-5 text-textColor text-center">
// // // //               Already have an account?{" "}
// // // //               <Link to="/login" className="text-primaryColor font-medium ml-1">
// // // //                 Login
// // // //               </Link>
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Signup;
















// // // import React, { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import uploadImageToCloudinary from "../utils/uploadCloudinary";
// // // import signupImg from "../assets/images/signup.gif";
// // // import avatar from "../assets/images/avatar-icon.png";

// // // const Signup = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     password: "",
// // //     role: "patient",
// // //     gender: "female",
// // //     photo: null,
// // //   });

// // //   const [selectedFile, setSelectedFile] = useState(null);
// // //   const [previewURL, setPreviewURL] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [uploadStatus, setUploadStatus] = useState(null);

// // //   useEffect(() => {
// // //     if (selectedFile) {
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         setPreviewURL(reader.result);
// // //       };
// // //       reader.readAsDataURL(selectedFile);
// // //     }
// // //   }, [selectedFile]);

// // //   const handleInputChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleFileInputChange = async (e) => {
// // //     const file = e.target.files[0];
// // //     if (!file) return;
    
// // //     setSelectedFile(file);
// // //     setLoading(true);
// // //     setUploadStatus(null);
    
// // //     try {
// // //       // Set photo in form data before upload to keep the file reference
// // //       setFormData(prev => ({ ...prev, photo: file }));
      
// // //       // We will handle the actual Cloudinary upload during form submission
// // //       // This prevents unnecessary uploads if the user abandons the form
// // //       setLoading(false);
// // //     } catch (error) {
// // //       console.error("File processing error:", error);
// // //       setLoading(false);
// // //       setUploadStatus({
// // //         success: false,
// // //         message: "Failed to process image. Please try again."
// // //       });
// // //     }
// // //   };

// // //   const submitHandler = async (event) => {
// // //     event.preventDefault();
// // //     setLoading(true);

// // //     try {
// // //       let photoURL = "";
      
// // //       // Only attempt upload if there's a file selected
// // //       if (selectedFile) {
// // //         console.log("Uploading image to Cloudinary...");
// // //         const uploadResult = await uploadImageToCloudinary(selectedFile);
        
// // //         if (uploadResult.error) {
// // //           throw new Error(uploadResult.error);
// // //         }
        
// // //         if (uploadResult.url) {
// // //           photoURL = uploadResult.url;
// // //           console.log("Image uploaded successfully:", photoURL);
// // //         }
// // //       }
      
// // //       // Create final data with either the Cloudinary URL or null
// // //       const finalFormData = {
// // //         ...formData,
// // //         photo: photoURL || null
// // //       };
      
// // //       console.log("Submitting form data:", finalFormData);
      
// // //       // Here you would make your actual API call to register the user
// // //       // Example: const response = await fetch('/api/Auth/register', {
// // //       //   method: 'POST',
// // //       //   headers: { 'Content-Type': 'application/json' },
// // //       //   body: JSON.stringify(finalFormData)
// // //       // });
      
// // //       // For now, just log the data that would be sent
// // //       const payload = new FormData();
// // //       Object.entries(finalFormData).forEach(([key, value]) => {
// // //         if (value !== null) {
// // //           payload.append(key, value);
// // //         }
// // //       });
      
// // //       console.log("Form payload:");
// // //       for (const pair of payload.entries()) {
// // //         console.log(pair[0] + ": ", pair[1]);
// // //       }
      
// // //       setUploadStatus({
// // //         success: true,
// // //         message: "Registration successful! Redirecting to login..."
// // //       });
      
// // //       // Redirect to login after successful registration
// // //       // setTimeout(() => navigate("/login"), 2000);
      
// // //     } catch (error) {
// // //       console.error("Registration failed:", error);
// // //       setUploadStatus({
// // //         success: false,
// // //         message: error.message || "Registration failed. Please try again."
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <section className="px-5 xl:px-0">
// // //       <div className="max-w-[1170px] mx-auto">
// // //         <div className="grid grid-cols-1 lg:grid-cols-2">
// // //           {/* Image Box */}
// // //           <div className="hidden lg:block bg-primaryColor rounded-l-lg">
// // //             <figure className="rounded-l-lg">
// // //               <img src={signupImg} alt="" className="w-full rounded-l-lg" />
// // //             </figure>
// // //           </div>

// // //           {/* Signup Form */}
// // //           <div className="rounded-l-lg lg:pl-16 py-10">
// // //             <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
// // //               Create an <span className="text-primaryColor">account</span>
// // //             </h3>

// // //             {uploadStatus && (
// // //               <div className={`mb-5 p-3 rounded-md ${uploadStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
// // //                 {uploadStatus.message}
// // //               </div>
// // //             )}

// // //             <form onSubmit={submitHandler}>
// // //               {/* Name */}
// // //               <div className="mb-5">
// // //                 <input
// // //                   type="text"
// // //                   name="name"
// // //                   placeholder="Enter your name"
// // //                   value={formData.name}
// // //                   onChange={handleInputChange}
// // //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
// // //                   required
// // //                 />
// // //               </div>

// // //               {/* Email */}
// // //               <div className="mb-5">
// // //                 <input
// // //                   type="email"
// // //                   name="email"
// // //                   placeholder="Enter your email"
// // //                   value={formData.email}
// // //                   onChange={handleInputChange}
// // //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
// // //                   required
// // //                 />
// // //               </div>

// // //               {/* Password */}
// // //               <div className="mb-5">
// // //                 <input
// // //                   type="password"
// // //                   name="password"
// // //                   placeholder="Enter your password"
// // //                   value={formData.password}
// // //                   onChange={handleInputChange}
// // //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
// // //                   required
// // //                 />
// // //               </div>

// // //               {/* Role and Gender on one line with compact widths */}
// // //               <div className="mb-5 flex items-center gap-8">
// // //                 {/* Role */}
// // //                 <div className="flex items-center gap-3">
// // //                   <label
// // //                     htmlFor="role"
// // //                     className="text-headingColor font-bold text-[16px] leading-7 whitespace-nowrap"
// // //                   >
// // //                     Are you a:
// // //                   </label>
// // //                   <select
// // //                     name="role"
// // //                     id="role"
// // //                     value={formData.role}
// // //                     onChange={handleInputChange}
// // //                     className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-28"
// // //                   >
// // //                     <option value="patient">Patient</option>
// // //                     <option value="doctor">Doctor</option>
// // //                   </select>
// // //                 </div>

// // //                 {/* Gender */}
// // //                 <div className="flex items-center gap-3">
// // //                   <label
// // //                     htmlFor="gender"
// // //                     className="text-headingColor font-bold text-[16px] leading-7"
// // //                   >
// // //                     Gender:
// // //                   </label>
// // //                   <select
// // //                     name="gender"
// // //                     id="gender"
// // //                     value={formData.gender}
// // //                     onChange={handleInputChange}
// // //                     className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-32"
// // //                   >
// // //                     <option value="female">Female</option>
// // //                     <option value="male">Male</option>
// // //                     <option value="non-binary">Non-binary</option>
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               {/* Upload Photo */}
// // //               <div className="mb-5 flex items-center gap-3">
// // //                 <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
// // //                   <img
// // //                     src={previewURL || avatar}
// // //                     alt="avatar preview"
// // //                     className="w-full h-full object-cover rounded-full"
// // //                   />
// // //                 </figure>

// // //                 <div className="relative w-[130px] h-[50px]">
// // //                   <input
// // //                     type="file"
// // //                     name="photo"
// // //                     id="customFile"
// // //                     accept=".jpg,.png"
// // //                     onChange={handleFileInputChange}
// // //                     className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
// // //                     disabled={loading}
// // //                   />
// // //                   <label
// // //                     htmlFor="customFile"
// // //                     className={`absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden ${loading ? 'bg-gray-300' : 'bg-[#0066ff46]'} text-headingColor font-semibold rounded-lg truncate cursor-pointer`}
// // //                   >
// // //                     {loading ? "Processing..." : "Upload Photo"}
// // //                   </label>
// // //                 </div>
// // //               </div>

// // //               {/* Submit Button */}
// // //               <button
// // //                 type="submit"
// // //                 className={`btn w-full ${loading ? 'bg-gray-400' : 'bg-primaryColor'} text-white py-2 rounded-md`}
// // //                 disabled={loading}
// // //               >
// // //                 {loading ? "Processing..." : "Register"}
// // //               </button>
// // //             </form>

// // //             {/* Redirect to Login */}
// // //             <p className="mt-5 text-textColor text-center">
// // //               Already have an account?{" "}
// // //               <Link to="/login" className="text-primaryColor font-medium ml-1">
// // //                 Login
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Signup;

























// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import uploadImageToCloudinary from "../utils/uploadCloudinary"; // keep only one
// // import signupImg from "../assets/images/signup.gif";
// // import avatar from "../assets/images/avatar-icon.png";
// // import { BASE_URL } from "../config.js";
// // import { toast } from "react-toastify";
// // import HashLoader from 'react-spinners/HashLoader';



// // const Signup = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     role: "patient",
// //     gender: "female",
// //     photo: null,
// //   });

// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [previewURL, setPreviewURL] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [uploadStatus, setUploadStatus] = useState(null);


// //   const navigate = useNavigate()

// //   useEffect(() => {
// //     if (selectedFile && typeof selectedFile !== 'string') {
// //       // Only use FileReader if selectedFile is an actual File object, not a URL string
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setPreviewURL(reader.result);
// //       };
// //       reader.readAsDataURL(selectedFile);
// //     }
// //   }, [selectedFile]);

// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleFileInputChange = async (event) => {
// //     const file = event.target.files[0];
// //     if (!file) return;
    
// //     setSelectedFile(file);
// //     setLoading(true);
// //     setUploadStatus(null);
    
// //     try {
// //       // Upload immediately when file is selected
// //       const data = await uploadImageToCloudinary(file);
      
// //       if (data.error) {
// //         throw new Error(data.error);
// //       }
      
// //       // Set the preview URL and update form data with the Cloudinary URL
// //       setPreviewURL(data.url);
// //       setSelectedFile(data.url);
// //       setFormData(prev => ({ ...prev, photo: data.url }));
      
// //       console.log("Image uploaded successfully:", data.url);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error("File upload error:", error);
// //       setLoading(false);
// //       setUploadStatus({
// //         success: false,
// //         message: "Failed to upload image. Please try again."
// //       });
// //     }
// //   };

// //   const submitHandler = async (event) => {
// //     event.preventDefault();
// //     setLoading(true);

// //     try {

// //       const res = await fetch('${BASE_URL}/Auth/register', {
// //         method:'post',
// //         headers:{
// //           'Content-Type':'application/json'
// //         },
// //         body: JSON.stringify(formData)
// //       })

// //       const { message} = await res.json()

// //       if(!res.ok){
// //         throw new Error(messgae)
// //       }
// //       setLoading(false)
// //       toast.success(message)
// //       navigate('/login')

// //       // No need to upload here - we already uploaded the image in handleFileInputChange
// //       console.log("Submitting form data:", formData);
      
// //       // Here you would make your actual API call to register the user
// //       // Example: const response = await fetch('/api/Auth/register', {
// //       //   method: 'POST',
// //       //   headers: { 'Content-Type': 'application/json' },
// //       //   body: JSON.stringify(formData)
// //       // });
      
// //       // For now, just log the data that would be sent
// //       const payload = new FormData();
// //       Object.entries(formData).forEach(([key, value]) => {
// //         if (value !== null) {
// //           payload.append(key, value);
// //         }
// //       });
      
// //       console.log("Form payload:");
// //       for (const pair of payload.entries()) {
// //         console.log(pair[0] + ": ", pair[1]);
// //       }
      
// //       setUploadStatus({
// //         success: true,
// //         message: "Registration successful! Redirecting to login..."
// //       });
      
// //       // Redirect to login after successful registration
// //       // setTimeout(() => navigate("/login"), 2000);
      




// //     } catch (error) {

// // toast.error(error.message)
// // setLoading(false)








// //       console.error("Registration failed:", error);
// //       setUploadStatus({
// //         success: false,
// //         message: error.message || "Registration failed. Please try again."
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section className="px-5 xl:px-0">
// //       <div className="max-w-[1170px] mx-auto">
// //         <div className="grid grid-cols-1 lg:grid-cols-2">
// //           {/* Image Box */}
// //           <div className="hidden lg:block bg-primaryColor rounded-l-lg">
// //             <figure className="rounded-l-lg">
// //               <img src={signupImg} alt="" className="w-full rounded-l-lg" />
// //             </figure>
// //           </div>

// //           {/* Signup Form */}
// //           <div className="rounded-l-lg lg:pl-16 py-10">
// //             <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
// //               Create an <span className="text-primaryColor">account</span>
// //             </h3>

// //             {uploadStatus && (
// //               <div className={`mb-5 p-3 rounded-md ${uploadStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
// //                 {uploadStatus.message}
// //               </div>
// //             )}

// //             <form onSubmit={submitHandler}>
// //               {/* Name */}
// //               <div className="mb-5">
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   placeholder="Enter your name"
// //                   value={formData.name}
// //                   onChange={handleInputChange}
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
// //                   required
// //                 />
// //               </div>

// //               {/* Email */}
// //               <div className="mb-5">
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   placeholder="Enter your email"
// //                   value={formData.email}
// //                   onChange={handleInputChange}
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
// //                   required
// //                 />
// //               </div>

// //               {/* Password */}
// //               <div className="mb-5">
// //                 <input
// //                   type="password"
// //                   name="password"
// //                   placeholder="Enter your password"
// //                   value={formData.password}
// //                   onChange={handleInputChange}
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
// //                   required
// //                 />
// //               </div>

// //               {/* Role and Gender on one line with compact widths */}
// //               <div className="mb-5 flex items-center gap-8">
// //                 {/* Role */}
// //                 <div className="flex items-center gap-3">
// //                   <label
// //                     htmlFor="role"
// //                     className="text-headingColor font-bold text-[16px] leading-7 whitespace-nowrap"
// //                   >
// //                     Are you a:
// //                   </label>
// //                   <select
// //                     name="role"
// //                     id="role"
// //                     value={formData.role}
// //                     onChange={handleInputChange}
// //                     className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-28"
// //                   >
// //                     <option value="patient">Patient</option>
// //                     <option value="doctor">Doctor</option>
// //                   </select>
// //                 </div>

// //                 {/* Gender */}
// //                 <div className="flex items-center gap-3">
// //                   <label
// //                     htmlFor="gender"
// //                     className="text-headingColor font-bold text-[16px] leading-7"
// //                   >
// //                     Gender:
// //                   </label>
// //                   <select
// //                     name="gender"
// //                     id="gender"
// //                     value={formData.gender}
// //                     onChange={handleInputChange}
// //                     className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-32"
// //                   >
// //                     <option value="female">Female</option>
// //                     <option value="male">Male</option>
// //                     <option value="non-binary">Non-binary</option>
// //                   </select>
// //                 </div>
// //               </div>

// //               {/* Upload Photo */}
// //               <div className="mb-5 flex items-center gap-3">
// //                 {selectedFile && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
// //                   <img
// //                     src={previewURL}
// //                     alt="avatar preview"
// //                     className="w-full h-full object-cover rounded-full"
// //                   />
// //                 </figure>}

// //                 <div className="relative w-[130px] h-[50px]">
// //                   <input
// //                     type="file"
// //                     name="photo"
// //                     id="customFile"
// //                     accept=".jpg,.png"
// //                     onChange={handleFileInputChange}
// //                     className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
// //                     disabled={loading}
// //                   />
// //                   <label
// //                     htmlFor="customFile"
// //                     className={`absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden ${loading ? 'bg-gray-300' : 'bg-[#0066ff46]'} text-headingColor font-semibold rounded-lg truncate cursor-pointer`}
// //                   >
// //                     {loading ? "Processing..." : "Upload Photo"}
// //                   </label>
// //                 </div>
// //               </div>

// //               {/* Submit Button */}
// //               <button
// //                 type="submit"
// //                 className={`btn w-full ${loading ? 'bg-gray-400' : 'bg-primaryColor'} text-white py-2 rounded-md`}
// //                 disabled={loading && true}
// //               >
// //                 {loading ? <HashLoader size={35} color="#ffffff"/> : "Sign Up"}
// //               </button>
// //             </form>

// //             {/* Redirect to Login */}
// //             <p className="mt-5 text-textColor text-center">
// //               Already have an account?{" "}
// //               <Link to="/login" className="text-primaryColor font-medium ml-1">
// //                 Login
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Signup;
















// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import uploadImageToCloudinary from "../utils/uploadCloudinary";
// import signupImg from "../assets/images/signup.gif";
// import avatar from "../assets/images/avatar-icon.png";
// import { BASE_URL } from "../config.js";
// import { toast } from "react-toastify";
// import HashLoader from 'react-spinners/HashLoader';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "patient",
//     gender: "female",
//     photo: null,
//   });

//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewURL, setPreviewURL] = useState("");
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

//       setPreviewURL(data.url);
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
    
//     const res = await fetch(`${BASE_URL}/Auth/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
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
//     navigate('/login');
//     setUploadStatus({
//       success: true,
//       message: "Registration successful! Redirecting to login..."
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
//     <section className="px-5 xl:px-0">
//       <div className="max-w-[1170px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           {/* Image Box */}
//           <div className="hidden lg:block bg-primaryColor rounded-l-lg">
//             <figure className="rounded-l-lg">
//               <img src={signupImg} alt="" className="w-full rounded-l-lg" />
//             </figure>
//           </div>

//           {/* Signup Form */}
//           <div className="rounded-l-lg lg:pl-16 py-10">
//             <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
//               Create an <span className="text-primaryColor">account</span>
//             </h3>

//             {uploadStatus && (
//               <div className={`mb-5 p-3 rounded-md ${uploadStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                 {uploadStatus.message}
//               </div>
//             )}

//             <form onSubmit={submitHandler}>
//               {/* Name */}
//               <div className="mb-5">
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
//                   required
//                 />
//               </div>

//               {/* Role and Gender */}
//               <div className="mb-5 flex items-center gap-8">
//                 <div className="flex items-center gap-3">
//                   <label htmlFor="role" className="text-headingColor font-bold text-[16px]">Are you a:</label>
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

//                 <div className="flex items-center gap-3">
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
//                 {selectedFile && (
//                   <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
//                     <img
//                       src={previewURL}
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
//                 className={`btn w-full ${loading ? 'bg-gray-400' : 'bg-primaryColor'} text-white py-2 rounded-md`}
//                 disabled={loading}
//               >
//                 {loading ? <HashLoader size={35} color="#ffffff" /> : "Sign Up"}
//               </button>
//             </form>

//             <p className="mt-5 text-textColor text-center">
//               Already have an account?{" "}
//               <Link to="/login" className="text-primaryColor font-medium ml-1">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;















import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/avatar-icon.png";
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import HashLoader from 'react-spinners/HashLoader';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    gender: "female",
    photo: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedFile && typeof selectedFile !== 'string') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Check file size - limit to 2MB
    if (file.size > 2 * 1024 * 1024) {
      setUploadStatus({
        success: false,
        message: "Image size should be less than 2MB"
      });
      return;
    }

    // Check file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setUploadStatus({
        success: false,
        message: "Only JPG, JPEG, and PNG images are allowed"
      });
      return;
    }

    setSelectedFile(file);
    setLoading(true);
    setUploadStatus(null);

    try {
      const data = await uploadImageToCloudinary(file);

      if (data.error) {
        throw new Error(data.error);
      }

      setPreviewURL(data.url);
      setSelectedFile(data.url);
      setFormData(prev => ({ ...prev, photo: data.url }));

      console.log("Image uploaded successfully:", data.url);
      setUploadStatus({
        success: true,
        message: "Image uploaded successfully"
      });
    } catch (error) {
      console.error("File upload error:", error);
      setUploadStatus({
        success: false,
        message: "Failed to upload image. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address";
    }

    // Validate password strength
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters long";
    }

    // Validate name
    if (formData.name.trim().length < 3) {
      return "Name must be at least 3 characters long";
    }

    return null;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }
    
    setLoading(true);
    setServerError(null);

    try {
      console.log("Attempting to register with:", `${BASE_URL}/Auth/register`);
      
      // Create a structured payload to match backend expectations
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        role: formData.role,
        gender: formData.gender,
        photo: formData.photo || null
      };
      
      console.log("Sending registration data:", JSON.stringify(payload));
      
      const res = await fetch(`${BASE_URL}/Auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // Check if response exists
      if (!res) {
        throw new Error("Failed to connect to server. Please check server status.");
      }

      const contentType = res.headers.get("content-type");
      let data;
      
      // Handle different response types
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server returned an invalid response format");
      }
      
      if (!res.ok) {
        // Extract error message from response if available
        const errorMsg = data.message || data.error || `Registration failed with status: ${res.status}`;
        console.error("Registration error response:", data);
        throw new Error(errorMsg);
      }

      toast.success(data.message || "Registration successful!");
      navigate('/login');
      setUploadStatus({
        success: true,
        message: "Registration successful! Redirecting to login..."
      });

    } catch (error) {
      console.error("Registration error details:", error);
      
      // Set detailed error message for UI display
      setServerError(error.message || "Network error. Please check your connection.");
      
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* Signup Form */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            {uploadStatus && (
              <div className={`mb-5 p-3 rounded-md ${uploadStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {uploadStatus.message}
              </div>
            )}

            {serverError && (
              <div className="mb-5 p-3 rounded-md bg-red-100 text-red-700">
                <p className="font-bold">Registration Error:</p>
                <p>{serverError}</p>
              </div>
            )}

            <form onSubmit={submitHandler}>
              {/* Name */}
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
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
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-5">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password (min 6 characters)"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primaryColor"
                  required
                  minLength={6}
                />
              </div>

              {/* Role and Gender */}
              <div className="mb-5 flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <label htmlFor="role" className="text-headingColor font-bold text-[16px]">Are you a:</label>
                  <select
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none w-28"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <label htmlFor="gender" className="text-headingColor font-bold text-[16px]">Gender:</label>
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
              </div>

              {/* Upload Photo */}
              <div className="mb-5 flex items-center gap-3">
                {previewURL ? (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={previewURL}
                      alt="avatar preview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </figure>
                ) : (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={avatar}
                      alt="default avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={loading}
                  />
                  <label
                    htmlFor="customFile"
                    className={`absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden ${loading ? 'bg-gray-300' : 'bg-[#0066ff46]'} text-headingColor font-semibold rounded-lg truncate cursor-pointer`}
                  >
                    {loading && selectedFile && typeof selectedFile !== 'string' ? "Uploading..." : "Upload Photo"}
                  </label>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-5">
                Photo is optional. Max size: 2MB (JPG, JPEG, PNG)
              </p>

              {/* Submit */}
              <button
                type="submit"
                className={`btn w-full ${loading ? 'bg-gray-400' : 'bg-primaryColor'} text-white py-3 rounded-md font-medium`}
                disabled={loading}
              >
                {loading ? <HashLoader size={25} color="#ffffff" /> : "Sign Up"}
              </button>
            </form>

            <p className="mt-5 text-textColor text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primaryColor font-medium ml-1">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;