// import React, { useState } from "react";
// import doctorImg from "../../assets/images/doctor-img02.png";
// import starIcon from "../../assets/images/Star.png";
// import DoctorAbout from "../../components/Doctors/DoctorAbout";
// import FeedBack from "../../components/Doctors/FeedBack";

// const DoctorDetails = () => {
//   const [tab, setTab] = useState("about");

//   return (
//     <section>
//       <div className="max-w-[1170px] px-5 mx-auto">
//         <div className="grid md:grid-cols-3 gap-[50px]">
//           <div className="md:col-span-2">
//             <div className="flex items-center gap-5">
//               <figure className="max-w-[200px] max-h-[200px]">
//                 <img src={doctorImg} alt="Doctor" className="w-full" />
//               </figure>

//               <div>
//                 <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
//                   Surgeon
//                 </span>
//                 <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
//                   Muhibur Rahman
//                 </h3>
//                 <div className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
//                   <img src={starIcon} alt="Rating" className="w-4 h-4" />
//                   4.2
//                   <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 lg:font-[500] text-textColor ml-1">
//                     (272)
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-4">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
//               iste rerum quas corrupti nisi perferendis nihil veritatis,
//               laudantium ipsa ratione! Optio architecto ipsa ex eligendi similique
//               quasi nulla voluptas excepturi!
//             </p>
//           </div>

//           <div>
//             <div className="mt-[50px] border-b border-solid border-[#0066ff34] pb-2">
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => setTab("about")}
//                   className={`py-2 px-5 text-[16px] leading-7 font-semibold ${
//                     tab === "about"
//                       ? "text-primaryColor border-b-2 border-primaryColor"
//                       : "text-headingColor"
//                   }`}
//                 >
//                   About
//                 </button>
//                 <button
//                   onClick={() => setTab("feedback")}
//                   className={`py-2 px-5 text-[16px] leading-7 font-semibold ${
//                     tab === "feedback"
//                       ? "text-primaryColor border-b-2 border-primaryColor"
//                       : "text-headingColor"
//                   }`}
//                 >
//                   Feedback
//                 </button>
//               </div>
//             </div>

//             <div className="mt-[50px]">
//               {/* Tab Content Goes Here */}
//               {tab === "about" && (
//                 <p className="text__para text-[15px] leading-6 text-textColor">
//                   This doctor is highly experienced and specializes in surgeries involving...
//                 </p>
//               )}
//               {tab === "feedback" && (
//                 <p className="text__para text-[15px] leading-6 text-textColor">
//                   “Great doctor, very patient and explained everything in detail!”
//                 </p>
//               )}
//             </div className="mt-[50 px]">
//             {
//               tab==='about' && <DoctorAbout />
//             }
//             {
//               tab==='feedback' && <FeedBack />
//             }
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DoctorDetails;










import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../components/Doctors/DoctorAbout";
import FeedBack from "../../components/Doctors/FeedBack";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="Doctor" className="w-full" />
              </figure>

              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Muhibur Rahman
                </h3>
                <div className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                  <img src={starIcon} alt="Rating" className="w-4 h-4" />
                  4.2
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 lg:font-[500] text-textColor ml-1">
                    (272)
                  </span>
                </div>
              </div>
            </div>
            <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
              iste rerum quas corrupti nisi perferendis nihil veritatis,
              laudantium ipsa ratione! Optio architecto ipsa ex eligendi similique
              quasi nulla voluptas excepturi!
            </p>
          </div>

          <div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34] pb-2">
              <div className="flex gap-4">
                <button
                  onClick={() => setTab("about")}
                  className={`py-2 px-5 text-[16px] leading-7 font-semibold ${
                    tab === "about"
                      ? "text-primaryColor border-b-2 border-primaryColor"
                      : "text-headingColor"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`py-2 px-5 text-[16px] leading-7 font-semibold ${
                    tab === "feedback"
                      ? "text-primaryColor border-b-2 border-primaryColor"
                      : "text-headingColor"
                  }`}
                >
                  Feedback
                </button>
              </div>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && (
                <>
                  <p className="text__para text-[15px] leading-6 text-textColor">
                    This doctor is highly experienced and specializes in surgeries involving...
                  </p>
                  <DoctorAbout />
                </>
              )}
              {tab === "feedback" && (
                <>
                  <p className="text__para text-[15px] leading-6 text-textColor">
                    “Great doctor, very patient and explained everything in detail!”
                  </p>
                  <FeedBack />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
