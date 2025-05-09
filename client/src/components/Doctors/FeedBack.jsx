// // import React from "react";
// // import avatar from "../../assets/images/avatar-icon.png";
// // import { formateDate } from "../../utils/formateDate";
// // import { AiFillStar } from "react-icons/ai";

// // const Feedback = () => {
// //   return (
// //     <div>
// //       <div className="mb-[50px]">
// //         <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
// //           All reviews (272)
// //         </h4>
// //         <div className="flex justify-between gap-10 mb-[30px]">
// //           <div className="flex gap-3">
// //             <figure className="w-10 h-10 rounded-full">
// //               <img className="w-full rounded-full" src={avatar} alt="User avatar" />
// //             </figure>
// //             <div>
// //               <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
// //                 Ali Ahmed
// //               </h5>
// //               <p className="text-[14px] leading-6 text-textColor">
// //                 {formateDate("02-14-2023")}
// //               </p>
// //               <p className="text_para mt-3 font-medium text-[15px]">
// //                 Good services, highly recommended
// //               </p>
// //               <div className="flex gap-1 mt-2">
// //                 {[...Array(5).keys()].map((_, index) => (
// //                   <AiFillStar key={index} color="#0067FF" />
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Feedback;











// import React, { useState } from "react";
// import avatar from "../../assets/images/avatar-icon.png";
// import { formateDate } from "../../utils/formateDate";
// import { AiFillStar } from "react-icons/ai";

// const Feedback = () => {

//     const [showFeedbackForm, setShowFeedbackForm] = useState(false)
//   return (
//     <div>
//       <div className="mb-[50px]">
//         <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
//           All reviews (272)
//         </h4>
//         <div className="flex justify-between gap-10 mb-[30px]">
//           <div className="flex gap-3">
//             <figure className="w-10 h-10 rounded-full">
//               <img className="w-full rounded-full" src={avatar} alt="User avatar" />
//             </figure>
//             <div>
//               <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
//                 Ali Ahmed
//               </h5>
//               <p className="text-[14px] leading-6 text-textColor">
//                 {formateDate("02-14-2023")}
//               </p>
//               <p className="text_para mt-3 font-medium text-[15px]">
//                 Good services, highly recommended 
//               </p>
//               </div>
//             </div>

//               <div className="flex gap-1 mt-2">
//                 {[...Array(5).keys()].map((_, index) => (
//                   <AiFillStar key={index} color="#0067FF" />
//                 ))}
//               </div>
//             </div>
//           </div>


//                  <div className="text-center"><button className="btn">Give Feedback</button></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;








import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full rounded-full" src={avatar} alt="User avatar" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Ali Ahmed
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate("02-14-2023")}
              </p>
              <p className="text_para mt-3 font-medium text-[15px]">
                Good services, highly recommended
              </p>
            </div>
          </div>

          <div className="flex gap-1 mt-2">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>

        {/* Optional: Feedback form modal can be conditionally shown here */}
        {showFeedbackForm && (
          <div className="mt-6 p-4 border rounded shadow bg-white">
            <h5 className="font-bold mb-2">Your Feedback</h5>
            {/* Add your feedback form fields here */}
            <textarea className="w-full p-2 border rounded mb-2" rows="4" placeholder="Write your feedback..."></textarea>
            <button className="btn" onClick={() => setShowFeedbackForm(false)}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
