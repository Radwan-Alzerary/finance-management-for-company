// import { useEffect } from "react";
// import { useAuth } from "../context/auth"; 
// import {  useNavigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//     const [auth] = useAuth();

//     // Check if user is authenticated
//     if (!auth?.token) {
//       // Redirect to login if not authenticated
//       return <Navigate to="/login" />;
//     }

//     // If authenticated, allow access to the route
//     return children;
//   };
  
// export default ProtectedRoute;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth"; // Make sure the path is correct

const ProtectedRoute = ({ children }) => {
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      navigate("/login"); // Redirect to login if user is not authenticated
    }
  }, [auth, navigate]);

  return auth.token ? children : null;
};

export default ProtectedRoute;
