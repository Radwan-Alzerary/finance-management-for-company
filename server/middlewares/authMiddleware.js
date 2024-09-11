// import JWT from "jsonwebtoken";
// import userModel from "../models/userModel.js";

// //Protected Routes token base
// export const requireSignIn = async (req, res, next) => {
//   try {
//     const decode = JWT.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     );
//     req.user = decode;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };


// //admin access
// export const isAdmin = async (req, res, next) => {
//   try {
//     const user = await userModel.findById(req.user._id);
//     if (user.role !== 1) {
//       return res.status(401).send({
//         success: false,
//         message: "UnAuthorized Access",
//       });
//     } else {
//       next();
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       success: false,
//       error,
//       message: "Error in admin middleware",
//     });
//   }
// };

import JWT from "jsonwebtoken";

// Protected Routes token-based
export const requireSignIn = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Authorization token required" });
    }

    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode; // Attach decoded token data (user) to request object
    next(); // Proceed to the next middleware or controller
  } catch (error) {
    console.error("JWT verification failed", error);
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

