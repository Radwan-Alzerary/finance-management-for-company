import express from "express";
// import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/"); //, requireSignIn, isAdmin

export default router;
