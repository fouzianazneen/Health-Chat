// import { useEffect, useState } from "react";
// import { token } from "../config"; // Adjust the path as per your structure

// const useFetchData = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const result = await res.json();

//         if (!res.ok) {
//           throw new Error(result.message + " 😬");
//         }

//         setData(result.data);
//         setLoading(false);
//       } catch (err) {
//         setLoading(false);
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetchData;







import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage

        if (!token) {
          throw new Error("No token found, please log in.");
        }

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message + " 😬");
        }

        setData(result.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]); // Re-run whenever the URL changes

  return { data, loading, error };
};

export default useFetchData;
