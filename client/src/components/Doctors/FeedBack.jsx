// import React from "react";
// import avatar from "../../assets/images/avatar-icon.png";
// import { formatDate } from "../../utils/formatDate";
// import { AiFillStar } from "react-icons/ai";

// const Feedback = ({reviews, totalrating}) => {
//   con
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
//               <div className="flex gap-1 mt-2">
//                 {[...Array(5).keys()].map((_, index) => (
//                   <AiFillStar key={index} color="#0067FF" />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;











import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const Feedback = ({reviews, totalRating}) => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({totalRating})
        </h4>
       {reviews?.map((review, index)=> (

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full rounded-full" src={review?.user?.photo} alt="User avatar" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                {review?.user?.name}
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate(review?.createdAt)}
              </p>
              <p className="text_para mt-3 font-medium text-[15px]">
                {review.reviewText}
              </p>
              </div>
            </div>

              <div className="flex gap-1 mt-2">
                {[...Array(review?.rating).keys()].map((_, index) => (
                  <AiFillStar key={index} color="#0067FF" />
                ))}
              </div>
            </div>))}
          </div>

               {!showFeedbackForm && (
                 <div className="text-center">
                  <button className="btn" onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
                  </div>
               )}
               {showFeedbackForm && <FeedbackForm />}
        </div>
      // </div>
    // </div>
  );
};

export default Feedback;








// // // import React, { useState } from "react";
// // // import avatar from "../../assets/images/avatar-icon.png";
// // // import { formateDate } from "../../utils/formateDate.jsx";
// // // import { AiFillStar } from "react-icons/ai";

// // // const Feedback = () => {
// // //   const [showFeedbackForm, setShowFeedbackForm] = useState(false);

// // //   return (
// // //     <div>
// // //       <div className="mb-[50px]">
// // //         <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
// // //           All reviews (272)
// // //         </h4>

// // //         <div className="flex justify-between gap-10 mb-[30px]">
// // //           <div className="flex gap-3">
// // //             <figure className="w-10 h-10 rounded-full">
// // //               <img className="w-full rounded-full" src={avatar} alt="User avatar" />
// // //             </figure>
// // //             <div>
// // //               <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
// // //                 Ali Ahmed
// // //               </h5>
// // //               <p className="text-[14px] leading-6 text-textColor">
// // //                 {formateDate("02-14-2023")}
// // //               </p>
// // //               <p className="text_para mt-3 font-medium text-[15px]">
// // //                 Good services, highly recommended
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div className="flex gap-1 mt-2">
// // //             {[...Array(5).keys()].map((_, index) => (
// // //               <AiFillStar key={index} color="#0067FF" />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="text-center">
// // //           <button className="btn" onClick={() => setShowFeedbackForm(true)}>
// // //             Give Feedback
// // //           </button>
// // //         </div>

// // //         {/* Optional: Feedback form modal can be conditionally shown here */}
// // //         {showFeedbackForm && (
// // //           <div className="mt-6 p-4 border rounded shadow bg-white">
// // //             <h5 className="font-bold mb-2">Your Feedback</h5>
// // //             {/* Add your feedback form fields here */}
// // //             <textarea className="w-full p-2 border rounded mb-2" rows="4" placeholder="Write your feedback..."></textarea>
// // //             <button className="btn" onClick={() => setShowFeedbackForm(false)}>Submit</button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Feedback;









// // import React, { useState } from "react";
// // import avatar from "../../assets/images/avatar-icon.png";
// // import { formateDate } from "../../utils/formateDate.jsx";
// // import { AiFillStar } from "react-icons/ai";

// // const Feedback = () => {
// //   const [showFeedbackForm, setShowFeedbackForm] = useState(false);

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
// //             </div>
// //           </div>

// //           <div className="flex gap-1 mt-2">
// //             {[...Array(5).keys()].map((_, index) => (
// //               <AiFillStar key={index} color="#0067FF" />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="text-center">
// //           <button className="btn" onClick={() => setShowFeedbackForm(true)}>
// //             Give Feedback
// //           </button>
// //         </div>

// //         {showFeedbackForm && (
// //           <div className="mt-6 p-4 border rounded shadow bg-white">
// //             <h5 className="font-bold mb-2">Your Feedback</h5>
// //             <textarea className="w-full p-2 border rounded mb-2" rows="4" placeholder="Write your feedback..."></textarea>
// //             <button className="btn" onClick={() => setShowFeedbackForm(false)}>Submit</button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Feedback;











// // import React, { useState } from "react";
// // import { AiFillStar } from "react-icons/ai";
// // // import FeedbackForm from './Feed'

// // const FeedbackForm = ({reviews, totalRating}) => {
// //   const [rating, setRating] = useState(0);
// //   const [hover, setHover] = useState(null);
// //   const [feedback, setFeedback] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Simple submission logic – you can replace with API call
// //     console.log("Rating:", rating);
// //     console.log("Feedback:", feedback);

// //     alert("Thank you for your feedback!");
    
// //     // Optionally reset the form
// //     setRating(0);
// //     setHover(null);
// //     setFeedback("");
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
// //       <div>
// //         <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
// //           How would you rate the experience 💫?
// //         </h3>
// //         <p className="text-headingColor text-[14px] mb-2">
// //           How would you rate the overall experience?*
// //         </p>
// //         <div className="flex gap-2 mb-4">
// //           {[...Array(5)].map((_, index) => {
// //             const starValue = index + 1;
// //             return (
// //               <button
// //                 key={starValue}
// //                 type="button"
// //                 onClick={() => setRating(starValue)}
// //                 onMouseEnter={() => setHover(starValue)}
// //                 onMouseLeave={() => setHover(null)}
// //                 onDoubleClick={() => setRating(0)}
// //                 className={`bg-transparent border-none outline-none text-[22px] ${
// //                   starValue <= (hover ?? rating)
// //                     ? "text-yellowColor"
// //                     : "text-gray-400"
// //                 }`}
// //               >
// //                 <AiFillStar />
// //               </button>
// //             );
// //           })}
// //         </div>

// //         <label
// //           htmlFor="feedback"
// //           className="block text-headingColor text-[14px] font-medium mb-2"
// //         >
// //           Share your feedback:
// //         </label>
// //         <textarea
// //           id="feedback"
// //           value={feedback}
// //           onChange={(e) => setFeedback(e.target.value)}
// //           rows={4}
// //           placeholder="Write your comments here..."
// //           className="w-full border border-gray-300 rounded-md p-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-yellowColor"
// //         />

// //         <button
// //           type="submit"
// //           disabled={rating === 0}
// //           className={`w-full py-2 px-4 rounded-md font-semibold text-white ${
// //             rating === 0
// //               ? "bg-gray-400 cursor-not-allowed"
// //               : "bg-yellowColor hover:bg-yellow-500"
// //           }`}
// //         >
// //           Submit Feedback
// //         </button>
// //       </div>
// //     </form>
// //   );
// // };

// // export default FeedbackForm;