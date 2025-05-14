// export const formatDate = (date, config) => {
//     const defaultOptions = { day: "numeric", month: "long", year: "numeric" };
//     const options = config ? config : defaultOptions;
//     return new Date(date).toLocaleDateString("en-US", options);
//   };







// // export const formateDate = (date, config) => {
// //   const defaultOptions = { day: "numeric", month: "long", year: "numeric" };
// //   const options = config ? config : defaultOptions;
// //   return new Date(date).toLocaleDateString("en-US", options);
// // };











// src/utils/formateDate.js
export const formatDate = (date, config) => {
  const defaultOptions = { day: "numeric", month: "long", year: "numeric" };
  const options = config ? config : defaultOptions;
  return new Date(date).toLocaleDateString("en-US", options);
};
