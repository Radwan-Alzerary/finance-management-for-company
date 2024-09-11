import express from "express";

import {
  createProducer,
  deleteProducer,
  getProducer,
  getProducerById,
  updateProducer,
} from "../controller/StoredController.js";
// import { requireSignIn } from "../middlewares/authMiddleware.js";

const storedRouter = express.Router();

storedRouter.get("/", 
  // requireSignIn, 
  getProducer);

storedRouter.get("/:id", 
  // requireSignIn, 
  getProducerById);

storedRouter.post("/createProducer", 
  // requireSignIn, 
  createProducer);

storedRouter.put("/:id", 
  // requireSignIn, 
  updateProducer);

storedRouter.delete("/:id", 
  // requireSignIn, 
  deleteProducer);

export default storedRouter;
