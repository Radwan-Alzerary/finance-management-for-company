import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployees,
  getEmployeesById,
  updateEmployee,
  getEmployeePhoto,
  addDebtToEmployee,
  addPaymentToEmployee,
  deleteDebt,
  deletePayment,
  updateDebt,
  updatePayment,
  } from "../controller/EmployeesController.js";
import formidable from "express-formidable";
// import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Get all employees
router.get("/", 
  // requireSignIn, 
  getEmployees);

// Get a employee by ID
router.get("/:id", 
  // requireSignIn, 
  getEmployeesById);


router.get("/employeePhoto/:id", 
  // requireSignIn, 
  getEmployeePhoto);


// Create a new employee
router.post("/createEmployee", 
  // requireSignIn, 
  formidable(), createEmployee);

// Update an employee
router.put("/:id", 
  // requireSignIn, 
  formidable(), updateEmployee);

// Delete a employee
router.delete("/:id", 
  // requireSignIn, 
  deleteEmployee);


// Add a new debt to an employee
router.post("/:id/addDebt", 
  // requireSignIn, 
  addDebtToEmployee); 

// Add a new debt to an employee
router.post("/:id/addPayment", 
  // requireSignIn, 
  addPaymentToEmployee); 

// Delete a specific debt from an employee
router.delete("/:id/debts", 
  // requireSignIn, 
  deleteDebt);

// Delete a specific payment from an employee
router.delete("/:id/payments", 
  // requireSignIn, 
  deletePayment);

router.put("/:id/debts/:debtId", 
  // requireSignIn, 
  updateDebt);

router.put("/:id/payments/:paymentId", 
  // requireSignIn, 
  updatePayment);


export default router;

