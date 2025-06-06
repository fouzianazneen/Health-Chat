// import { formatDate } from "../../utils/formatDate";

// const DoctorAbout = ({name, about, qualifications, experiences}) => {
//   return (
//     <div>
//       <div>
//         <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
//           About of{" "}
//           <span className="text-irisBlueColor font-bold text-[24px] leading-9">
//             {name}
//           </span>
//         </h3>
//         <p className="text__para mt-4">
//          {about}
//         </p>
//       </div>
//       <div className="mt-12">
//         <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
//           Education
//         </h3>
//         <ul className="pt-4 md:p-5">
//           {/* {experiences?.map((item, index)=>)} */}
//           {qualifications?.map((item, index)=>
//   <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
//             <div>
//               <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
//                 {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
//               </span>
//               <p className="text-[16px] leading-6 font-medium text-textColor">
//                 {item.degree}
//               </p>
//             </div>
//             <p className="text-[14px] leading-5 font-medium text-textColor">
//               {item.university}
//             </p>
//           </li>
//           <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
//             <div>
//               <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
//                 {formatDate("12-04-2010")} - {formatDate("21-04-2014")}
//               </span>
//               <p className="text-[16px] leading-6 font-medium text-textColor">
//                 PhD in Surgeon
//               </p>
//             </div>
//             <p className="text-[14px] leading-5 font-medium text-textColor">
//               New Apollo Hospital, Panjagutta.
//             </p>
//           </li>
//           )}
        
//         </ul>
//       </div>
//       <div className="mt-12">
//         <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
//           Experience
//         </h3>
//         <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
//             {experiences?.map((item, index)=><li key={index}className="p-4 rounded bg-[#fff9ea]">
//             <span className="text-yellowColor text-[15px] leading-6 font-semibold">
//               {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
//             </span>
//             <p className="text-[16px] leading-6 font-medium text-textColor">
//               {item.position}
//             </p>
//             <p className="text-[14px] leading-5 font-medium text-textColor">
//             {item.hospital}
//             </p>
//           </li>)}
          



//           {/* <li className="p-4 rounded bg-[#fff9ea]">
//             <span className="text-yellowColor text-[15px] leading-6 font-semibold">
//               {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
//             </span>
//             <p className="text-[16px] leading-6 font-medium text-textColor">
//               Sr. Surgeon
//             </p>
//             <p className="text-[14px] leading-5 font-medium text-textColor">
//               New Apollo Hospital, Panjagutta.
//             </p>
//           </li> */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DoctorAbout;


















import { formatDate } from "../../utils/formatDate";

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para mt-4">{about}</p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
            >
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {item.degree}
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {item.university}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experiences?.map((item, index) => (
            <li key={index} className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {item.position}
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {item.hospital}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;