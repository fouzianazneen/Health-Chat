// // // // import React, { useState } from "react";
// // // // import doctorImg from "../../assets/images/doctor-img02.png";
// // // // import starIcon from "../../assets/images/Star.png";
// // // // import DoctorAbout from "../../components/Doctors/DoctorAbout";
// // // // import FeedBack from "../../components/Doctors/FeedBack";

// // // // const DoctorDetails = () => {
// // // //   const [tab, setTab] = useState("about");

// // // //   return (
// // // //     <section>
// // // //       <div className="max-w-[1170px] px-5 mx-auto">
// // // //         <div className="grid md:grid-cols-3 gap-[50px]">
// // // //           <div className="md:col-span-2">
// // // //             <div className="flex items-center gap-5">
// // // //               <figure className="max-w-[200px] max-h-[200px]">
// // // //                 <img src={doctorImg} alt="Doctor" className="w-full" />
// // // //               </figure>

// // // //               <div>
// // // //                 <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
// // // //                   Surgeon
// // // //                 </span>
// // // //                 <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
// // // //                   Muhibur Rahman
// // // //                 </h3>
// // // //                 <div className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
// // // //                   <img src={starIcon} alt="Rating" className="w-4 h-4" />
// // // //                   4.2
// // // //                   <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 lg:font-[500] text-textColor ml-1">
// // // //                     (272)
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-4">
// // // //               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
// // // //               iste rerum quas corrupti nisi perferendis nihil veritatis,
// // // //               laudantium ipsa ratione! Optio architecto ipsa ex eligendi similique
// // // //               quasi nulla voluptas excepturi!
// // // //             </p>
// // // //           </div>

// // // //           <div>
// // // //             <div className="mt-[50px] border-b border-solid border-[#0066ff34] pb-2">
// // // //               <div className="flex gap-4">
// // // //                 <button
// // // //                   onClick={() => setTab("about")}
// // // //                   className={`py-2 px-5 text-[16px] leading-7 font-semibold ${
// // // //                     tab === "about"
// // // //                       ? "text-primaryColor border-b-2 border-primaryColor"
// // // //                       : "text-headingColor"
// // // //                   }`}
// // // //                 >
// // // //                   About
// // // //                 </button>
// // // //                 <button
// // // //                   onClick={() => setTab("feedback")}
// // // //                   className={`py-2 px-5 text-[16px] leading-7 font-semibold ${
// // // //                     tab === "feedback"
// // // //                       ? "text-primaryColor border-b-2 border-primaryColor"
// // // //                       : "text-headingColor"
// // // //                   }`}
// // // //                 >
// // // //                   Feedback
// // // //                 </button>
// // // //               </div>
// // // //             </div>

// // // //             <div className="mt-[50px]">
// // // //               {/* Tab Content Goes Here */}
// // // //               {tab === "about" && (
// // // //                 <p className="text__para text-[15px] leading-6 text-textColor">
// // // //                   This doctor is highly experienced and specializes in surgeries involving...
// // // //                 </p>
// // // //               )}
// // // //               {tab === "feedback" && (
// // // //                 <p className="text__para text-[15px] leading-6 text-textColor">
// // // //                   “Great doctor, very patient and explained everything in detail!”
// // // //                 </p>
// // // //               )}
// // // //             </div className="mt-[50 px]">
// // // //             {
// // // //               tab==='about' && <DoctorAbout />
// // // //             }
// // // //             {
// // // //               tab==='feedback' && <FeedBack />
// // // //             }
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default DoctorDetails;










// // import React, { useState } from "react";
// // import doctorImg from "../../assets/images/doctor-img02.png";
// // import starIcon from "../../assets/images/Star.png";
// // import DoctorAbout from "../../components/Doctors/DoctorAbout";
// // import FeedBack from "../../components/Doctors/FeedBack";


// // import { BASE_URL } from "../../config";
// // import useFetchData from "../../hooks/useFetchData";
// // import Loader from "../../components/Loader/Loading";
// // import Error from "../../components/Error/Error";

// // import { useParams } from "react-router-dom";
// // import SidePanel from "./SidePanel";



// // const DoctorDetails = () => {
// //   const [tab, setTab] = useState("about");

// //   const {id} = useParams()
  
// //    const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);

// //    const {

// //     name,
// //     qualifications,
// //     experiences,
// //     timeSlots,
// //     reviews,
// //     bio,
// //     averageRating,
// //     totalRating,
// //     specialization,
// //     ticketPrice,
// //     photo,
// //    } = doctor;

// //   return (
// //     <section>
// //       <div className="max-w-[1170px] px-5 mx-auto">

// //           {loading && <Loader />}
// //       {error && <Error />}



// //        { !loading && !error && <div className="grid md:grid-cols-3 gap-[50px]">
// //           <div className="md:col-span-2">
// //             <div className="flex items-center gap-5">
// //               <figure className="max-w-[200px] max-h-[200px]">
// //                 <img src={photo} alt="Doctor" className="w-full" />
// //               </figure>

// //               <div>
// //                 <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
// //                   {specialization}
// //                 </span>
// //                 <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
// //                   {name}
// //                 </h3>
// //                 <div className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
// //                   <img src={starIcon} alt="Rating" className="w-4 h-4" />
// //                   {averageRating}
// //                   <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 lg:font-[500] text-textColor ml-1">
// //                     ({totalRating})
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //             <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-4">
// //              {bio}
// //             </p>
// //           </div>

// //           <div>
// //             <div className="mt-[50px] border-b border-solid border-[#0066ff34] pb-2">
// //               <div className="flex gap-4">
// //                 <button
// //                   onClick={() => setTab("about")}
// //                   className={`py-2 px-5 text-[16px] leading-7 font-semibold ${
// //                     tab === "about"
// //                       ? "text-primaryColor border-b-2 border-primaryColor"
// //                       : "text-headingColor"
// //                   }`}
// //                 >
// //                   About
// //                 </button>
// //                 <button
// //                   onClick={() => setTab("feedback")}
// //                   className={`py-2 px-5 text-[16px] leading-7 font-semibold ${
// //                     tab === "feedback"
// //                       ? "text-primaryColor border-b-2 border-primaryColor"
// //                       : "text-headingColor"
// //                   }`}
// //                 >
// //                   Feedback
// //                 </button>
// //               </div>
// //             {/* </div> */}

// //             {/* <div className="mt-[50px]">
// //               {tab === "about" && (
// //                 <>
// //                   <p className="text__para text-[15px] leading-6 text-textColor">
// //                     This doctor is highly experienced and specializes in surgeries involving...
// //                   </p>
// //                   <DoctorAbout />
// //                 </>
// //               )}
// //               {tab === "feedback" && (
// //                 <>
// //                   {/* <p className="text__para text-[15px] leading-6 text-textColor">
// //                     “Great doctor, very patient and explained everything in detail!”
// //                   </p>
// //                   <FeedBack /> *
// //                 </>



// //               )}
// //             // </div>*/


// //             <div className="mt-[50px]">
// //               {tab === "about" && <DoctorAbout name={name} about={about} qualifications={qualifications} experiences={experiences}/>}
// //               {tab === "feedback" && <FeedBack/>}
// //             </div>


// //           </div>
// //           <SidePanel/>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default DoctorDetails;











// // // import React from "react";
// // // // import  formateDate  from "../../utils/formateDate.js";
// // // import { formatDate } from "../../utils/formatDate.js";

// // // import { BASE_URL } from "../../config";
// // // import useFetchData from "../../hooks/useFetchData";
// // // import Loader from "../../components/Loader/Loading";
// // // import Error from "../../components/Error/Error";


// // // const DoctorAbout = () => {

// // //    const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

// // //   return (
// // //     <div>
// // //       <div>
// // //         <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
// // //           About of
// // //           <span className="text-irisBlueColor font-bold text-[24px] leading-9">
// // //             Muhibur Rahman
// // //           </span>
// // //         </h3>
// // //         <p className="text__para">
// // //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque asperiores sequi similique corporis dolorem nulla? Animi ratione quam aut necessitatibus, totam a possimus, vitae veniam, aperiam harum impedit fuga.
// // //         </p>
// // //       </div>

// // //       <div className="mt-12">
// // //         <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
// // //           Education
// // //         </h3>

// // //         <ul className="pt-4 md:p-5">
// // //           <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
// // //             <div>
// // //               <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
// // //                 {formatDate("09-13-2014")} - {formatDate("03-04-2016")}
// // //               </span>
// // //               <p className="text-[16px] leading-6 font-medium text-textColor">
// // //                 PHD in Surgeon
// // //               </p>
// // //             </div>
// // //             <p className="text-[14px] leading-5 font-medium text-textColor">
// // //               New Apollo Hospital, New York
// // //             </p>
// // //           </li>
// // //           <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
// // //             <div>
// // //               <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
// // //                 {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
// // //               </span>
// // //               <p className="text-[16px] leading-6 font-medium text-textColor">
// // //                 MD in Surgeon
// // //               </p>
// // //             </div>
// // //             <p className="text-[14px] leading-5 font-medium text-textColor">
// // //               Capital Medical College, London
// // //             </p>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       <div className="mt-12">
// // //         <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
// // //           Experience
// // //         </h3>

// // //         <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
// // //           <li className="p-4 rounded bg-[#fff9ea]">
// // //             <span className="text-yellowColor text-[15px] leading-6 font-semibold">
// // //               {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
// // //             </span>
// // //             <p className="text-[16px] leading-6 font-medium text-textColor">
// // //               Senior Surgeon
// // //             </p>
// // //             <p className="text-[14px] leading-5 font-medium text-textColor">
// // //               Mayo Clinic, Rochester
// // //             </p>
// // //           </li>
// // //           <li className="p-4 rounded bg-[#fff9ea]">
// // //             <span className="text-yellowColor text-[15px] leading-6 font-semibold">
// // //               {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
// // //             </span>
// // //             <p className="text-[16px] leading-6 font-medium text-textColor">
// // //               Senior Surgeon
// // //             </p>
// // //             <p className="text-[14px] leading-5 font-medium text-textColor">
// // //               Cleveland Clinic, Ohio
// // //             </p>
// // //           </li>
// // //         </ul>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DoctorAbout;





















// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// import doctorImg from "../../assets/images/doctor-img02.png";
// import starIcon from "../../assets/images/Star.png";

// import DoctorAbout from "../../components/Doctors/DoctorAbout";
// import FeedBack from "../../components/Doctors/FeedBack";
// import SidePanel from "./SidePanel";
// import Loader from "../../components/Loader/Loading";
// import Error from "../../components/Error/Error";

// import { BASE_URL } from "../../config";
// import useFetchData from "../../hooks/useFetchData";

// const DoctorDetails = () => {
//   const [tab, setTab] = useState("about");
//   const { id } = useParams();

//   const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);

//   // const {
//   //   name,
//   //   qualifications,
//   //   experiences,
//   //   timeSlots,
//   //   reviews,
//   //   bio,
//   //   averageRating,
//   //   totalRating,
//   //   specialization,
//   //   ticketPrice,
//   //   photo,
//   // } = doctor;



//   {!loading && !error && doctor && (
//   (() => {
//     const {
//       name,
//       qualifications,
//       experiences,
//       timeSlots,
//       reviews,
//       bio,
//       averageRating,
//       totalRating,
//       specialization,
//       ticketPrice,
//       photo,
//       _id,
//     } = doctor;

//   return (
//     <section>
//       <div className="max-w-[1170px] px-5 mx-auto">
//         {loading && <Loader />}
//         {error && <Error />}

//         {!loading && !error && (
//           <div className="grid md:grid-cols-3 gap-[50px]">
//             {/* Doctor Profile Section */}
//             <div className="md:col-span-2">
//               <div className="flex items-center gap-5">
//                 <figure className="max-w-[200px] max-h-[200px]">
//                   <img src={photo || doctorImg} alt="Doctor" className="w-full" />
//                 </figure>

//                 <div>
//                   <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] font-semibold rounded">
//                     {specialization}
//                   </span>
//                   <h3 className="text-headingColor text-[22px] mt-3 font-bold">
//                     {name}
//                   </h3>
//                   <div className="flex items-center gap-[6px] text-[14px] lg:text-[16px] font-semibold text-headingColor">
//                     <img src={starIcon} alt="Rating" className="w-4 h-4" />
//                     {averageRating}
//                     <span className="text-textColor ml-1">({totalRating})</span>
//                   </div>
//                 </div>
//               </div>

//               <p className="text__para text-[14px] md:text-[15px] lg:max-w-[390px] mt-4">
//                 {bio}
//               </p>

//               {/* Tabs */}
//               <div className="mt-[50px] border-b border-[#0066ff34] pb-2">
//                 <div className="flex gap-4">
//                   <button
//                     onClick={() => setTab("about")}
//                     className={`py-2 px-5 text-[16px] font-semibold ${
//                       tab === "about"
//                         ? "text-primaryColor border-b-2 border-primaryColor"
//                         : "text-headingColor"
//                     }`}
//                   >
//                     About
//                   </button>
//                   <button
//                     onClick={() => setTab("feedback")}
//                     className={`py-2 px-5 text-[16px] font-semibold ${
//                       tab === "feedback"
//                         ? "text-primaryColor border-b-2 border-primaryColor"
//                         : "text-headingColor"
//                     }`}
//                   >
//                     Feedback
//                   </button>
//                 </div>
//               </div>

//               {/* Tab Content */}
//               <div className="mt-[30px]">
//                 {tab === "about" && (
//                   <DoctorAbout
//                     name={name}
//                     about={bio}
//                     qualifications={qualifications}
//                     experiences={experiences}
//                   />
//                 )}
//                 {tab === "feedback" && <FeedBack reviews={reviews} totalRating={totalRating} />}
//               </div>
//             </div>

//             {/* Side Panel */}
//             <SidePanel doctorId={doctor._id} ticketPrice={ticketPrice} timeSlots={timeSlots} />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// })();

// export default DoctorDetails;











import React, { useState } from "react";
import { useParams } from "react-router-dom";

import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";

import DoctorAbout from "../../components/Doctors/DoctorAbout";
import FeedBack from "../../components/Doctors/FeedBack";
import SidePanel from "./SidePanel";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();

  const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (!doctor) return <p className="text-center text-red-500 mt-5">Doctor not found</p>;

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
    _id,
  } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          {/* Doctor Profile Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={photo || doctorImg} alt="Doctor" className="w-full" />
              </figure>

              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] font-semibold rounded">
                  {specialization}
                </span>
                <h3 className="text-headingColor text-[22px] mt-3 font-bold">{name}</h3>
                <div className="flex items-center gap-[6px] text-[14px] lg:text-[16px] font-semibold text-headingColor">
                  <img src={starIcon} alt="Rating" className="w-4 h-4" />
                  {averageRating}
                  <span className="text-textColor ml-1">({totalRating})</span>
                </div>
              </div>
            </div>

            <p className="text__para text-[14px] md:text-[15px] lg:max-w-[390px] mt-4">{bio}</p>

            {/* Tabs */}
            <div className="mt-[50px] border-b border-[#0066ff34] pb-2">
              <div className="flex gap-4">
                <button
                  onClick={() => setTab("about")}
                  className={`py-2 px-5 text-[16px] font-semibold ${
                    tab === "about"
                      ? "text-primaryColor border-b-2 border-primaryColor"
                      : "text-headingColor"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`py-2 px-5 text-[16px] font-semibold ${
                    tab === "feedback"
                      ? "text-primaryColor border-b-2 border-primaryColor"
                      : "text-headingColor"
                  }`}
                >
                  Feedback
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-[30px]">
              {tab === "about" && (
                <DoctorAbout
                  name={name}
                  about={bio}
                  qualifications={qualifications}
                  experiences={experiences}
                />
              )}
              {tab === "feedback" && (
                <FeedBack reviews={reviews} totalRating={totalRating} />
              )}
            </div>
          </div>

          {/* Side Panel */}
          <SidePanel doctorId={_id} ticketPrice={ticketPrice} timeSlots={timeSlots} />
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
