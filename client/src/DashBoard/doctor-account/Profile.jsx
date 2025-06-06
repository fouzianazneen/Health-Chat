
// import { useEffect, useState } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import {uploadImageTocloudinary} from './../../utils/uploadCloudinary';
// import { BASE_URL, token } from "../../config";
// import { toast } from 'react-toastify';

// const Profile = ({doctorData}) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password:"",
//     phone: "",
//     bio: "",
//     gender: "",
//     specialization: "",
//     ticketPrice: "",
//     qualifications: [],
//     experiences: [],
//     timeSlots: [],
//     about: "",
//     photo:null,
//   });

//   useEffect(()=>{
//     setFormData({
// name: doctorData?.name,
//     email: doctorData?.email,
//     password: doctorData?.password,
//     phone: doctorData?.phone,
//     bio: doctorData?.bio,
//     gender: doctorData?.gender,
//     specialization: doctorData?.specialization,
//     ticketPrice: doctorData?.ticketPrice,
//     qualifications: doctorData?.qualifications,
//     experiences: doctorData?.experiences,
//     timeSlots: doctorData?.timeSlots,
//     about: doctorData?.about,
//     photo: doctorData?.photo,
//     })
//   },[doctorData])

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileInputChange = async event => {
//     const file = event.target.files[0];
//     const data = await uploadImageTocloudinary(file);
//     console.log(data);
//     setFormData({... formData, photo:data?.url})
//   };

//   const updateProfileHandler = async e => {
//     e.preventDefault();

//     try {
//       const res = awai fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
//         method:'PUT',
//         headers:{
//           'content-type:'application/json',
//           Authorization:`Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });
//       const result = await res.json();

//       if(!res.ok){
//         throw Error(result.message);

//       }
//       toast.success(result.message);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };


//    // resusabble function for adding item
//    const addItem = (key, item) => {
//     setFormData(prevFormData=> ({...prevFormData, [key]:[...prevFormData[key], item]}))
//    }

//    // resuable input change function
//    const handleResuableInputChangeFunc = (key, index, event)=> {
//     const {name, value} = event.target

//     setFormData(prevFormData =>{
//       const updateItems = [...prevFormData[key]]

//       updateItems[index][name] = value

//       return {
//         ...prevFormData,
//         [key]:updateItems,
//       }
//     })
//    }


//    // resuable function for deleting item
//    const deleteItem = (key, Index)>{
//     setFormData(prevFormData=> ({...prevFormData, [key]:prevFormData[key].filter((_,i)=> i !=== index)}))
//    }

//   const addQualification = e=> {
//     e.preventDefault();

//     addItem('qualifications', {
//       startingDate: "", endingDate: "", degree: "", university: ""
//     })
//   }

//   const handleQualificationChange = (event, index)=> {
//     handleResuableInputChangeFunc('qualifications', index, event)
//   }


//   const deleteQualification = (e, index) => {
//     e.preventDefault()
//     deleteItem('qualifications', index)
//   }


// const addExperience = e=> {
//     e.preventDefault();

//     addItem('experiences', {
//       startingDate: "", endingDate: "", postion: "", hospital: ""
//     })
//   }

//   const handleExperienceChange = (event, index)=> {
//     handleResuableInputChangeFunc('experiences', index, event)
//   }


//   const deleteExperience = (e, index) => {
//     e.preventDefault()
//     deleteItem('experiences', index)
//   }





//   const addTimeSlot = e=> {
//     e.preventDefault();

//     addItem('timeSlots', {
//       day: "", startingTime: "", endingTime: "", 
//     })
//   }

//   const handleTimeSlotChange = (event, index)=> {
//     handleResuableInputChangeFunc('timeSlots', index, event)
//   }


//   const deleteTimeSlot = (e, index) => {
//     e.preventDefault()
//     deleteItem('timeSlots', index)
//   }



//   return (
//     <div>
//       <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
//         Profile Information
//       </h2>

//       <form>
//         {/* --- Basic Info --- */}
//         <div className="mb-5">
//           <p className="form__label">Name</p>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Full Name"
//             className="form__input"
//           />
//         </div>

//         <div className="mb-5">
//           <p className="form__label">Email</p>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Email"
//             className="form__input"
//             readOnly
//             disabled
//           />
//         </div>

//         <div className="mb-5">
//           <p className="form__label">Phone*</p>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             placeholder="Phone number"
//             className="form__input"
//           />
//         </div>

//         <div className="mb-5">
//           <p className="form__label">Bio</p>
//           <input
//             type="text"
//             name="bio"
//             value={formData.bio}
//             onChange={handleInputChange}
//             placeholder="Short bio"
//             className="form__input"
//             maxLength={100}
//           />
//         </div>

//         {/* --- Dropdowns --- */}
//         <div className="grid grid-cols-3 gap-5 mb-[30px]">
//           <div>
//             <p className="form__label">Gender*</p>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleInputChange}
//               className="form__input"
//             >
//               <option value="">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           <div>
//             <p className="form__label">Specialization*</p>
//             <select
//               name="specialization"
//               value={formData.specialization}
//               onChange={handleInputChange}
//               className="form__input"
//             >
//               <option value="">Select</option>
//               <option value="surgeon">Surgeon</option>
//               <option value="neurologist">Neurologist</option>
//               <option value="dermatologist">Dermatologist</option>
//             </select>
//           </div>

//           <div>
//             <p className="form__label">Ticket Price*</p>
//             <input
//               type="number"
//               name="ticketPrice"
//               value={formData.ticketPrice}
//               onChange={handleInputChange}
//               placeholder=""
//               className="form__input"
//             />
//           </div>
//         </div>

//         {/* --- Qualifications --- */}
//         <div className="mb-5">
//           <p className="form__label">Qualifications</p>
//           {formData.qualifications?.map((item, index) => (
//             <div key={index}>
//               <div className="grid grid-cols-2 gap-5">
//                 <div>
//                   <p className="form__label">Starting Date</p>
//                   <input
//                     type="date"
//                     name="startingDate"
//                     value={item.startingDate}
//                     className="form__input"
//                     onChange={e => handleQualificationChange(e, index)}
//                   />
//                 </div>
//                 <div>
//                   <p className="form__label">Ending Date</p>
//                   <input
//                     type="date"
//                     name="endingDate"
//                     value={item.endingDate}
//                     className="form__input"
//                     onChange={e => handleQualificationChange(e, index)}
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-5 mt-5">
//                 <div>
//                   <p className="form__label">Degree</p>
//                   <input
//                     type="text"
//                     name="degree"
//                     value={item.degree}
//                     className="form__input"
//                     onChange={e => handleQualificationChange(e, index)}
//                   />
//                 </div>
//                 <div>
//                   <p className="form__label">University</p>
//                   <input
//                     type="text"
//                     name="university"
//                     value={item.university}
//                     className="form__input"
//                     onChange={e => handleQualificationChange(e, index)}
//                   />
//                 </div>
//               </div>

//               <button onClick={e=>deleteQualification(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
//                 <AiOutlineDelete />
//               </button>
//             </div>
//           ))}

//           <button onClick={addQualification} className="bg-100 py-2 px-5 rounded text-white h-fit cursor-pointer">
//             Add Qualification
//           </button>
//         </div>

//         {/* --- Experiences --- */}
//         <div className="mb-5">
//           <p className="form__label">Experiences</p>
//           {formData.experiences?.map((item, index) => (
//             <div key={index}>
//               <div className="grid grid-cols-2 gap-5">
//                 <div>
//                   <p className="form__label">Starting Date</p>
//                   <input
//                     type="date"
//                     name="startingDate"
//                     value={item.startingDate}
//                     className="form__input"
//                     onChange={e => handleExperienceChange(e, index)}
//                   />
//                 </div>
//                 <div>
//                   <p className="form__label">Ending Date</p>
//                   <input
//                     type="date"
//                     name="endingDate"
//                     value={item.endingDate}
//                     className="form__input"
//                     onChange={e => handleExperienceChange(e, index)}
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-5 mt-5">
//                 <div>
//                   <p className="form__label">Position</p>
//                   <input
//                     type="text"
//                     name="position"
//                     value={item.position}
//                     className="form__input"
//                     onChange={e => handleExperienceChange(e, index)}
//                   />
//                 </div>
//                 <div>
//                   <p className="form__label">Hospital</p>
//                   <input
//                     type="text"
//                     name="hospital"
//                     value={item.hospital}
//                     className="form__input"
//                     onChange={e => handleExperienceChange(e, index)}
//                   />
//                 </div>
//               </div>

//               <button 
//               onClick={e=>deleteExperience(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
//                 <AiOutlineDelete />
//               </button>
//             </div>
//           ))}

//           <button onClick={addExperience} className="bg-100 py-2 px-5 rounded text-white h-fit cursor-pointer">
//             Add Experiences
//           </button>
//         </div>

//         {/* --- Time Slots --- */}
//         <div className="mb-5">
//           <p className="form__label">Time Slots</p>
//           {formData.timeSlots?.map((item, index) => (
//             <div key={index}>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-[30px]">
//                 <div>
//                   <p className="form__label">Day*</p>
//                   <select name="day" value={item.day} className="form__input py-3.5"
//                    onChange={e => handleTimeSlotChange(e, index)}>
//                     <option value=""></option>
//                     <option value="saturday">Saturday</option>
//                     <option value="sunday">Sunday</option>
//                     <option value="monday">Monday</option>
//                     <option value="tuesday">Tuesday</option>
//                     <option value="wednesday">Wednesday</option>
//                     <option value="thursday">Thursday</option>
//                     <option value="friday">Friday</option>
//                   </select>
//                 </div>

//                 <div>
//                   <p className="form__label">Starting Time</p>
//                   <input
//                     type="time"
//                     name="startingTimee"
//                     value={item.startingTime}
//                     className="form__input"
//                      onChange={e => handleTimeSlotChange(e, index)}
//                   />
//                 </div>

//                 <div>
//                   <p className="form__label">Ending Time</p>
//                   <input
//                     type="time"
//                     name="endingTime"
//                     value={item.endingTime}
//                     className="form__input"
//                      onChange={e => handleTimeSlotChange(e, index)}
//                   />
//                 </div>

//                 <button 
//                 onClick={e=> deleteTimeSlot(e, index)}
//                 className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer">
//                   <AiOutlineDelete />
//                 </button>
//               </div>
//             </div>
//           ))}

//           <button onClick={addTimeSlot} className="bg-100 py-2 px-5 rounded text-white h-fit cursor-pointer">
//             Add Time Slot
//           </button>
//         </div>
//         <div className="mb-5">
//           <p className="form__label">About*</p>
//           <textarea name="about" row={5} value={formData.about} placeholder="write about you" onChange={handleInputChange} className="form__input"></textarea>
//           </div>
//           <div className="mb-5 flex items-center gap-3">
//           <div className="mb-5 flex items-center gap-3">
//   {formData.photo && (
//     <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
//       <img
//         src={formData.photo}
//         alt=""
//         className="w-full rounded-full"
//       />
//     </figure>
//   )}

//   <div className="relative w-[130px] h-[50px]">
//     <input
//       type="file"
//       name="photo"
//       id="customFile"
//       onChange={handleFileInputChange}
//       accept=".jpg, .png"
//       className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
//     />
//     <label
//       htmlFor="customFile"
//       className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
//     >
//       Upload Photo
//     </label>
//   </div>
// </div>
//           </div>
//           <div className="mt-7">
//             <button type="submit" onClick={updateProfileHandler} className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg">Update Profile</button>
//           </div>
//       </form>
//     </div>
//   );
// };

// export default Profile;














// // import { useState } from "react";
// // import { AiOutlineDelete } from "react-icons/ai";

// // const Profile = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     bio: "",
// //     gender: "",
// //     specialization: "",
// //     ticketPrice: "",
// //     qualifications: [
// //       { startingDate: "", endingDate: "", degree: "", university: "" },
// //     ],
// //     experiences: [
// //       { startingDate: "", endingDate: "", position: "", hospital: "" },
// //     ],
// //     timeSlots: [
// //       { day: "", startingTime: "", endingTime: "" }, // Fixed property name from startingDate to startingTime
// //     ],
// //     about: "",
// //     photo: null,
// //   });

// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleFileInputChange = (e) => {
// //     // Implement file handling logic
// //     if (e.target.files.length === 0) return;
    
// //     const file = e.target.files[0];
// //     // For preview
// //     const reader = new FileReader();
// //     reader.onload = () => {
// //       setFormData({ ...formData, photo: reader.result });
// //     };
// //     reader.readAsDataURL(file);
// //   };

// //   const updateProfileHandler = async (e) => {
// //     e.preventDefault();
// //     try {
// //       // Implement API call to update profile
// //       console.log("Form data to submit:", formData);
// //       // Add your API call here
// //       // Example: await axios.put('/api/doctors/profile', formData);
// //       alert("Profile updated successfully!");
// //     } catch (error) {
// //       console.error("Error updating profile:", error);
// //       alert("Failed to update profile. Please try again.");
// //     }
// //   };

// //   // Reusable function for adding item
// //   const addItem = (key, item) => {
// //     setFormData(prevFormData => ({ 
// //       ...prevFormData, 
// //       [key]: [...prevFormData[key], item] 
// //     }));
// //   };

// //   // Reusable input change function
// //   const handleReusableInputChangeFunc = (key, index, event) => {
// //     const { name, value } = event.target;

// //     setFormData(prevFormData => {
// //       const updatedItems = [...prevFormData[key]];
// //       updatedItems[index][name] = value;

// //       return {
// //         ...prevFormData,
// //         [key]: updatedItems,
// //       };
// //     });
// //   };

// //   // Reusable function for deleting items
// //   const deleteItem = (key, index) => {
// //     setFormData(prevFormData => {
// //       const updatedItems = [...prevFormData[key]];
// //       updatedItems.splice(index, 1);
      
// //       // Ensure there's always at least one empty item
// //       if (updatedItems.length === 0) {
// //         if (key === 'qualifications') {
// //           updatedItems.push({ startingDate: "", endingDate: "", degree: "", university: "" });
// //         } else if (key === 'experiences') {
// //           updatedItems.push({ startingDate: "", endingDate: "", position: "", hospital: "" });
// //         } else if (key === 'timeSlots') {
// //           updatedItems.push({ day: "", startingTime: "", endingTime: "" });
// //         }
// //       }

// //       return {
// //         ...prevFormData,
// //         [key]: updatedItems,
// //       };
// //     });
// //   };

// //   // Qualification handlers
// //   const addQualification = (e) => {
// //     e.preventDefault();
// //     addItem('qualifications', {
// //       startingDate: "", endingDate: "", degree: "", university: ""
// //     });
// //   };

// //   const handleQualificationChange = (event, index) => {
// //     handleReusableInputChangeFunc('qualifications', index, event);
// //   };

// //   const deleteQualification = (index, e) => {
// //     e.preventDefault();
// //     deleteItem('qualifications', index);
// //   };

// //   // Experience handlers
// //   const addExperience = (e) => {
// //     e.preventDefault();
// //     addItem('experiences', {
// //       startingDate: "", endingDate: "", position: "", hospital: ""
// //     });
// //   };

// //   const handleExperienceChange = (event, index) => {
// //     handleReusableInputChangeFunc('experiences', index, event);
// //   };

// //   const deleteExperience = (index, e) => {
// //     e.preventDefault();
// //     deleteItem('experiences', index);
// //   };

// //   // Time slot handlers
// //   const addTimeSlot = (e) => {
// //     e.preventDefault();
// //     addItem('timeSlots', {
// //       day: "", startingTime: "", endingTime: ""
// //     });
// //   };

// //   const handleTimeSlotChange = (event, index) => {
// //     handleReusableInputChangeFunc('timeSlots', index, event);
// //   };

// //   const deleteTimeSlot = (index, e) => {
// //     e.preventDefault();
// //     deleteItem('timeSlots', index);
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
// //         Profile Information
// //       </h2>

// //       <form>
// //         {/* --- Basic Info --- */}
// //         <div className="mb-5">
// //           <p className="form__label">Name</p>
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //             placeholder="Full Name"
// //             className="form__input"
// //           />
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Email</p>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleInputChange}
// //             placeholder="Email"
// //             className="form__input"
// //             readOnly
// //             disabled
// //           />
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Phone*</p>
// //           <input
// //             type="text"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleInputChange}
// //             placeholder="Phone number"
// //             className="form__input"
// //           />
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">Bio</p>
// //           <input
// //             type="text"
// //             name="bio"
// //             value={formData.bio}
// //             onChange={handleInputChange}
// //             placeholder="Short bio"
// //             className="form__input"
// //             maxLength={100}
// //           />
// //         </div>

// //         {/* --- Dropdowns --- */}
// //         <div className="grid grid-cols-3 gap-5 mb-[30px]">
// //           <div>
// //             <p className="form__label">Gender*</p>
// //             <select
// //               name="gender"
// //               value={formData.gender}
// //               onChange={handleInputChange}
// //               className="form__input"
// //             >
// //               <option value="">Select</option>
// //               <option value="male">Male</option>
// //               <option value="female">Female</option>
// //               <option value="other">Other</option>
// //             </select>
// //           </div>

// //           <div>
// //             <p className="form__label">Specialization*</p>
// //             <select
// //               name="specialization"
// //               value={formData.specialization}
// //               onChange={handleInputChange}
// //               className="form__input"
// //             >
// //               <option value="">Select</option>
// //               <option value="surgeon">Surgeon</option>
// //               <option value="neurologist">Neurologist</option>
// //               <option value="dermatologist">Dermatologist</option>
// //             </select>
// //           </div>

// //           <div>
// //             <p className="form__label">Ticket Price*</p>
// //             <input
// //               type="number"
// //               name="ticketPrice"
// //               value={formData.ticketPrice}
// //               onChange={handleInputChange}
// //               placeholder=""
// //               className="form__input"
// //             />
// //           </div>
// //         </div>

// //         {/* --- Qualifications --- */}
// //         <div className="mb-5">
// //           <p className="form__label">Qualifications</p>
// //           {formData.qualifications?.map((item, index) => (
// //             <div key={index}>
// //               <div className="grid grid-cols-2 gap-5">
// //                 <div>
// //                   <p className="form__label">Starting Date</p>
// //                   <input
// //                     type="date"
// //                     name="startingDate"
// //                     value={item.startingDate}
// //                     className="form__input"
// //                     onChange={e => handleQualificationChange(e, index)}
// //                   />
// //                 </div>
// //                 <div>
// //                   <p className="form__label">Ending Date</p>
// //                   <input
// //                     type="date"
// //                     name="endingDate"
// //                     value={item.endingDate}
// //                     className="form__input"
// //                     onChange={e => handleQualificationChange(e, index)}
// //                   />
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-2 gap-5 mt-5">
// //                 <div>
// //                   <p className="form__label">Degree</p>
// //                   <input
// //                     type="text"
// //                     name="degree"
// //                     value={item.degree}
// //                     className="form__input"
// //                     onChange={e => handleQualificationChange(e, index)}
// //                   />
// //                 </div>
// //                 <div>
// //                   <p className="form__label">University</p>
// //                   <input
// //                     type="text"
// //                     name="university"
// //                     value={item.university}
// //                     className="form__input"
// //                     onChange={e => handleQualificationChange(e, index)}
// //                   />
// //                 </div>
// //               </div>

// //               <button 
// //                 onClick={e => deleteQualification(index, e)}
// //                 className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
// //               >
// //                 <AiOutlineDelete />
// //               </button>
// //             </div>
// //           ))}

// //           <button onClick={addQualification} className="bg-[#0066ff] py-2 px-5 rounded text-white h-fit cursor-pointer">
// //             Add Qualification
// //           </button>
// //         </div>

// //         {/* --- Experiences --- */}
// //         <div className="mb-5">
// //           <p className="form__label">Experiences</p>
// //           {formData.experiences?.map((item, index) => (
// //             <div key={index}>
// //               <div className="grid grid-cols-2 gap-5">
// //                 <div>
// //                   <p className="form__label">Starting Date</p>
// //                   <input
// //                     type="date"
// //                     name="startingDate"
// //                     value={item.startingDate}
// //                     className="form__input"
// //                     onChange={e => handleExperienceChange(e, index)}
// //                   />
// //                 </div>
// //                 <div>
// //                   <p className="form__label">Ending Date</p>
// //                   <input
// //                     type="date"
// //                     name="endingDate"
// //                     value={item.endingDate}
// //                     className="form__input"
// //                     onChange={e => handleExperienceChange(e, index)}
// //                   />
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-2 gap-5 mt-5">
// //                 <div>
// //                   <p className="form__label">Position</p>
// //                   <input
// //                     type="text"
// //                     name="position"
// //                     value={item.position}
// //                     className="form__input"
// //                     onChange={e => handleExperienceChange(e, index)}
// //                   />
// //                 </div>
// //                 <div>
// //                   <p className="form__label">Hospital</p>
// //                   <input
// //                     type="text"
// //                     name="hospital"
// //                     value={item.hospital}
// //                     className="form__input"
// //                     onChange={e => handleExperienceChange(e, index)}
// //                   />
// //                 </div>
// //               </div>

// //               <button 
// //                 onClick={e => deleteExperience(index, e)}
// //                 className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
// //               >
// //                 <AiOutlineDelete />
// //               </button>
// //             </div>
// //           ))}

// //           <button onClick={addExperience} className="bg-[#0066ff] py-2 px-5 rounded text-white h-fit cursor-pointer">
// //             Add Experience
// //           </button>
// //         </div>

// //         {/* --- Time Slots --- */}
// //         <div className="mb-5">
// //           <p className="form__label">Time Slots</p>
// //           {formData.timeSlots?.map((item, index) => (
// //             <div key={index}>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-[30px]">
// //                 <div>
// //                   <p className="form__label">Day*</p>
// //                   <select 
// //                     name="day" 
// //                     value={item.day} 
// //                     className="form__input py-3.5"
// //                     onChange={e => handleTimeSlotChange(e, index)}
// //                   >
// //                     <option value="">Select</option>
// //                     <option value="saturday">Saturday</option>
// //                     <option value="sunday">Sunday</option>
// //                     <option value="monday">Monday</option>
// //                     <option value="tuesday">Tuesday</option>
// //                     <option value="wednesday">Wednesday</option>
// //                     <option value="thursday">Thursday</option>
// //                     <option value="friday">Friday</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <p className="form__label">Starting Time</p>
// //                   <input
// //                     type="time"
// //                     name="startingTime"
// //                     value={item.startingTime}
// //                     className="form__input"
// //                     onChange={e => handleTimeSlotChange(e, index)}
// //                   />
// //                 </div>

// //                 <div>
// //                   <p className="form__label">Ending Time</p>
// //                   <input
// //                     type="time"
// //                     name="endingTime"
// //                     value={item.endingTime}
// //                     className="form__input"
// //                     onChange={e => handleTimeSlotChange(e, index)}
// //                   />
// //                 </div>

// //                 <button 
// //                   onClick={e => deleteTimeSlot(index, e)}
// //                   className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer"
// //                 >
// //                   <AiOutlineDelete />
// //                 </button>
// //               </div>
// //             </div>
// //           ))}

// //           <button onClick={addTimeSlot} className="bg-[#0066ff] py-2 px-5 rounded text-white h-fit cursor-pointer">
// //             Add Time Slot
// //           </button>
// //         </div>

// //         <div className="mb-5">
// //           <p className="form__label">About*</p>
// //           <textarea 
// //             name="about" 
// //             rows={5}
// //             value={formData.about} 
// //             placeholder="Write about you" 
// //             onChange={handleInputChange} 
// //             className="form__input"
// //           ></textarea>
// //         </div>

// //         <div className="mb-5 flex items-center gap-3">
// //           {formData.photo && (
// //             <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
// //               <img
// //                 src={formData.photo}
// //                 alt=""
// //                 className="w-full rounded-full"
// //               />
// //             </figure>
// //           )}

// //           <div className="relative w-[130px] h-[50px]">
// //             <input
// //               type="file"
// //               name="photo"
// //               id="customFile"
// //               onChange={handleFileInputChange}
// //               accept=".jpg, .png"
// //               className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
// //             />
// //             <label
// //               htmlFor="customFile"
// //               className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
// //             >
// //               Upload Photo
// //             </label>
// //           </div>
// //         </div>

// //         <div className="mt-7">
// //           <button 
// //             type="submit" 
// //             onClick={updateProfileHandler} 
// //             className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg"
// //           >
// //             Update Profile
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Profile;

















import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import  uploadImageTocloudinary  from '../../utils/uploadCloudinary.js';
import { BASE_URL, getToken } from "../../config";
import { toast } from 'react-toastify';

const Profile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: "",
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  });

  useEffect(() => {
    if (doctorData) {
      setFormData({
        name: doctorData?.name || "",
        email: doctorData?.email || "",
        password: doctorData?.password || "",
        phone: doctorData?.phone || "",
        bio: doctorData?.bio || "",
        gender: doctorData?.gender || "",
        specialization: doctorData?.specialization || "",
        ticketPrice: doctorData?.ticketPrice || "",
        qualifications: doctorData?.qualifications || [],
        experiences: doctorData?.experiences || [],
        timeSlots: doctorData?.timeSlots || [],
        about: doctorData?.about || "",
        photo: doctorData?.photo || null,
      });
    }
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    try {
      const file = event.target.files[0];
      if (!file) return;
      
      const data = await uploadImageTocloudinary(file);
      if (data?.url) {
        setFormData({ ...formData, photo: data.url });
      }
    } catch (error) {
      toast.error("Error uploading image. Please try again.");
      console.error("Upload error:", error);
    }
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(formData),
      });
      
      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }
      
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Reusable function for adding item
  const addItem = (key, item) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item]
    }));
  };

  // Reusable input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData(prevFormData => {
      const updatedItems = [...prevFormData[key]];
      updatedItems[index] = {
        ...updatedItems[index],
        [name]: value
      };

      return {
        ...prevFormData,
        [key]: updatedItems,
      };
    });
  };

  // Reusable function for deleting item
  const deleteItem = (key, index) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index)
    }));
  };

  const addQualification = (e) => {
    e.preventDefault();
    addItem('qualifications', {
      startingDate: "", endingDate: "", degree: "", university: ""
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc('qualifications', index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem('qualifications', index);
  };

  const addExperience = (e) => {
    e.preventDefault();
    addItem('experiences', {
      startingDate: "", endingDate: "", position: "", hospital: ""
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc('experiences', index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem('experiences', index);
  };

  const addTimeSlot = (e) => {
    e.preventDefault();
    addItem('timeSlots', {
      day: "", startingTime: "", endingTime: ""
    });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc('timeSlots', index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem('timeSlots', index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form>
        {/* --- Basic Info --- */}
        <div className="mb-5">
          <p className="form__label">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            disabled
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Bio</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Short bio"
            className="form__input"
            maxLength={100}
          />
        </div>

        {/* --- Dropdowns --- */}
        <div className="grid grid-cols-3 gap-5 mb-[30px]">
          <div>
            <p className="form__label">Gender*</p>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="form__input"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <p className="form__label">Specialization*</p>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              className="form__input"
            >
              <option value="">Select</option>
              <option value="surgeon">Surgeon</option>
              <option value="neurologist">Neurologist</option>
              <option value="dermatologist">Dermatologist</option>
            </select>
          </div>

          <div>
            <p className="form__label">Ticket Price*</p>
            <input
              type="number"
              name="ticketPrice"
              value={formData.ticketPrice}
              onChange={handleInputChange}
              placeholder=""
              className="form__input"
            />
          </div>
        </div>

        {/* --- Qualifications --- */}
        <div className="mb-5">
          <p className="form__label">Qualifications</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Starting Date</p>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    className="form__input"
                    onChange={e => handleQualificationChange(e, index)}
                  />
                </div>
                <div>
                  <p className="form__label">Ending Date</p>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    className="form__input"
                    onChange={e => handleQualificationChange(e, index)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <p className="form__label">Degree</p>
                  <input
                    type="text"
                    name="degree"
                    value={item.degree}
                    className="form__input"
                    onChange={e => handleQualificationChange(e, index)}
                  />
                </div>
                <div>
                  <p className="form__label">University</p>
                  <input
                    type="text"
                    name="university"
                    value={item.university}
                    className="form__input"
                    onChange={e => handleQualificationChange(e, index)}
                  />
                </div>
              </div>

              <button 
                onClick={e => deleteQualification(e, index)} 
                className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}

          <button 
            onClick={addQualification} 
            className="bg-[#0066ff] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>

        {/* --- Experiences --- */}
        <div className="mb-5">
          <p className="form__label">Experiences</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Starting Date</p>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    className="form__input"
                    onChange={e => handleExperienceChange(e, index)}
                  />
                </div>
                <div>
                  <p className="form__label">Ending Date</p>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    className="form__input"
                    onChange={e => handleExperienceChange(e, index)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <p className="form__label">Position</p>
                  <input
                    type="text"
                    name="position"
                    value={item.position || ""}
                    className="form__input"
                    onChange={e => handleExperienceChange(e, index)}
                  />
                </div>
                <div>
                  <p className="form__label">Hospital</p>
                  <input
                    type="text"
                    name="hospital"
                    value={item.hospital}
                    className="form__input"
                    onChange={e => handleExperienceChange(e, index)}
                  />
                </div>
              </div>

              <button 
                onClick={e => deleteExperience(e, index)} 
                className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}

          <button 
            onClick={addExperience} 
            className="bg-[#0066ff] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Experience
          </button>
        </div>

        {/* --- Time Slots --- */}
        <div className="mb-5">
          <p className="form__label">Time Slots</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-[30px]">
                <div>
                  <p className="form__label">Day*</p>
                  <select 
                    name="day" 
                    value={item.day} 
                    className="form__input py-3.5"
                    onChange={e => handleTimeSlotChange(e, index)}
                  >
                    <option value="">Select</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                  </select>
                </div>

                <div>
                  <p className="form__label">Starting Time</p>
                  <input
                    type="time"
                    name="startingTime"
                    value={item.startingTime || ""}
                    className="form__input"
                    onChange={e => handleTimeSlotChange(e, index)}
                  />
                </div>

                <div>
                  <p className="form__label">Ending Time</p>
                  <input
                    type="time"
                    name="endingTime"
                    value={item.endingTime || ""}
                    className="form__input"
                    onChange={e => handleTimeSlotChange(e, index)}
                  />
                </div>

                <button 
                  onClick={e => deleteTimeSlot(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button 
            onClick={addTimeSlot} 
            className="bg-[#0066ff] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Time Slot
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea 
            name="about" 
            rows={5} 
            value={formData.about} 
            placeholder="Write about you" 
            onChange={handleInputChange} 
            className="form__input"
          ></textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo}
                alt=""
                className="w-full rounded-full"
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button 
            type="submit" 
            onClick={updateProfileHandler} 
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;