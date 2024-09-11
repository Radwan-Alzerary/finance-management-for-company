// import { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     user: null,
//     token: "",
//   });
//   // Update axios default headers when auth changes
//   useEffect(() => {
//     axios.defaults.headers.common["authorization"] = auth.token;
//   }, [auth.token]);

//   useEffect(() => {
//     const data = localStorage.getItem("auth"); 
//     if (data) {
//       const parseData = JSON.parse(data);
//       setAuth({
//         // ...auth,
//         user: parseData.user,
//         token: parseData.token,
//       });
//     }
//     //eslint-disable-next-line
//   }, []);

//   return (
//     <AuthContext.Provider value={[auth, setAuth]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // custom hook
// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };

import { createContext, useContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap your app and provide the auth state
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Initialize from localStorage if available
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : { user: null, token: null };
  });

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the useAuth hook for easy access to the auth state
export const useAuth = () => useContext(AuthContext);
