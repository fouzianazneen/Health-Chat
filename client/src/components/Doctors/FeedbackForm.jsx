// // import React, { useState } from "react";
// // import { AiFillStar } from "react-icons/ai";

// // const FeedbackForm = () => {
// //   const [rating, setRating] = useState(0)
// //   const [rating, setRating] = useState(0)

// //   return (
// //     <form action="">
// //       <div>
// //         <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
// //           How would you rate the overall experience?*
// //         </h3>
// //         <div className="flex gap-2">
// //           {[...Array(5)].map((_, index) => {
// //             const starValue = index + 1;
// //             return (
// //               <button
// //   key={index}
// //   type="button"
// //   onClick={() => setRating(index)}
// //   className={`bg-transparent border-none outline-none text-[22px] ${
// //     hover !== null
// //       ? index < hover
// //         ? "text-yellowColor"
// //         : "text-gray-400"
// //       : index < rating
// //       onClick={()} => setrRating(index) onMouseEnter onMouseLeave onDoubleClick</div>
// //       ? "text-yellowColor"
// //       : "text-gray-400"
// //   }`}
// // >
// //   <AiFillStar />
// // </button>

// //             );
// //           })}
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default FeedbackForm;










// import React, { useState } from "react";
// import { AiFillStar } from "react-icons/ai";
// import { useParams } from "react-router-dom";
// import { BASE_URL, token } from "../../config";
// import { toast } from 'react-toastify';
// import HashLoader from "react-spinners/HashLoader";

// const FeedbackForm = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(null); // Added for hover state
// const [reviewText, setreviewText] = useState("");
// const [loading, setLoading] = useState("");

// const {id} = useParams();

// const handleSubmitReview = async e => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//   if (!rating || !reviewText) {
//     setLoading(false);
//     toast.error('Rating & Review Fields are required');
//     return;
//   }

//   const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`
//     },
//     body: JSON.stringify({ rating, reviewText })
//   });

//   const result = await res.json();

//   if (!res.ok) {
//     throw new Error(result.message);
//   }
//   setLoading(false);
//   toast.success(result.message);
// } catch (err) {
//   // handle error
//   setLoading(false);
//   toast.error(err.message);
// }
// }
//   return (
//     <form action="">
//       <div>
//         <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
//           How would you rate the overall experience?*
//         </h3>
//         <div className="flex gap-2">
//           {[...Array(5).keys()].map((_, index) => {
//             index += 1;

//             return (
//               <button
//                 key={index}
//                 type="button"
//                 className={`${index <= ((rating && hover) || hover) 
//                   ? "text-yellowColor"
//                   : "text-gray-400"
//                 } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
//                 onClick={() => setRating(index)}
//                 onMouseEnter={() => setHover(index)}
//                 onMouseLeave={() => setHover(rating)}
//                 onDoubleClick={() => setHover(0);
//                    setRating(0);
//                 }}
                
//               ><span>
//  <AiFillStar />
//               </span>
               
//               </button>
//             );
//           })}
//         </div>
//       </div>
//       <div className="mt-[30px]">
//   <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
//     Share your feedback or suggestions*
//   </h3>

//   <textarea
//     className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-3 py-3 rounded-md"
//     rows="5"
//     placeholder="Write your message"
//     onChange={(e) => setReviewText(e.target.value)}
//   ></textarea>

//   <button type="submit" onClick={handleSubmitReview} className="btn">
//     Submit Feedback
//   </button>
// </div>
//     </form>
//   );
// };

// export default FeedbackForm;











import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL, getToken } from "../../config";
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState(""); // Fixed typo
  const [loading, setLoading] = useState(false); // Fixed initial state type

  const { id } = useParams();

  const handleSubmitReview = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error('Rating & Review Fields are required');
        // return;
      }

      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify({ rating, reviewText })
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      setLoading(false);
      toast.success(result.message);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?*
        </h3>
        <div className="flex gap-2">
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${index <= (hover || rating)
                  ? "text-yellowColor"
                  : "text-gray-400"
                  } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions*
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-3 py-3 rounded-md"
          rows="5"
          placeholder="Write your message"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        <button type="submit" onClick={handleSubmitReview} className="btn">
          {loading ? <HashLoader size={25} color="#fff"/> : "Submit Feedback"}
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
