// routes/customers.js
import express from "express";
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controller/customerController.js";
// import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Get all customers
router.get("/", 
  // requireSignIn, 
  getCustomers);

// Get a customer by ID
router.get("/:id", 
  // requireSignIn, 
  getCustomerById);

// Create a new customer
router.post("/createCustomer", 
  // requireSignIn, 
  createCustomer);

// Update a customer
router.put("/:id", 
  // requireSignIn, 
  updateCustomer);

// Delete a customer
router.delete("/:id", 
  // requireSignIn, 
  deleteCustomer);

export default router;
