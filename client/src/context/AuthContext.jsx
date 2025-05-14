// // import { Children, useContext, useEffect, useReducer } from "react";

// // const initialState = {
// //   user: null,
// //   role: null,
// //   token: null,
// // };

// // export AuthContext = createContext(initialState);

// // const Authreducer = (state, action) => {
// //   switch (action.type) {
// //     case "LOGIN_START":
// //       return {
// //         user: null,
// //         role: null,
// //         token: null,
// //       };

// //     case "LOGIN_SUCCESS":
// //       return {
// //         user: action.payload.user,
// //         token: action.payload.token,
// //         role: action.payload.role,
// //       };
// //     case "LOGIN_START":
// //       return {
// //         user: null,
// //         role: null,
// //         token: null,
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // export const AuthContextProvider = ({ Children }) => {
// //   const [state, dispatch] = useReducer(Authreducer, initialState);

// //   return (
// //     <AuthContext.Provider
// //       value={{ user: state.user, token: state.token, role: state.role, dispatch }}
// //     >
// //       {Children}
// //     </AuthContext.Provider>
// //   );
// // };












// import { createContext, useEffect, useReducer } from "react";

// const initialState = {
//   user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
//   role: localStorage.getItem('role') || null,
//   token: localStorage.getItem('token') || null,
// };

// export const AuthContext = createContext(initialState);

// const AuthReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         user: null,
//         role: null,
//         token: null,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload.user,
//         token: action.payload.token,
//         role: action.payload.role,
//       };
//     default:
//       return state;
//   }
// };

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, initialState);


//   useEffect(()=> {
//     localStorage.setItem('user', JSON.stringify(state.user))
//     localStorage.setItem('token', state.token)
//     localStorage.setItem('role', state.role)
//   }, [state])

//   return (
//     <AuthContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



// export default AuthContext;












import { createContext, useEffect, useReducer } from "react";

const initialState = {
  user: null,
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
};

try {
  const user = localStorage.getItem('user');
  if (user) {
    initialState.user = JSON.parse(user);
  }
} catch (e) {
  // Handle any errors from JSON parsing gracefully
  console.error("Error parsing user data from localStorage", e);
}

export const AuthContext = createContext(initialState);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
       case "LOGOUT":
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      return {
        user: null,
        role: null,
        token: null,
      };
  
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('token', state.token);
    localStorage.setItem('role', state.role);
  }, [state]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
