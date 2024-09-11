import React from "react";
import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";
import Customers from "./pages/Customers/Customers";
import AddCustomer from "./pages/Customers/AddCustomerForm";
import CustomerDetails from "./pages/Customers/CustomerDetails";
import CustomerEdit from "./pages/Customers/CustomerEdit";

import Stored from "./pages/Stored/Stored";
// import EditProducer from "./pages/Stored/EditProducer";
import AddProducerForm from "./pages/Stored/AddProducerForm";
import Home from "./pages/Home";
import Employees from "./pages/Employees/Employees";
import CreateEmployee from "./pages/Employees/CreateEmployee";
import UpdateEmployee from "./pages/Employees/UpdateEmployee";
import EmployeeDetails from "./pages/Employees/EmployeeDetails";
import Registering from "./pages/Auth/Registering";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import EditProducerForm from "./pages/Stored/EditProducerForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/register" element={<Registering />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />

        {/* Protected Routes */}
        <Route
          path="/customer"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addCustomer"
          element={
            <ProtectedRoute>
              <AddCustomer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers/:id"
          element={
            <ProtectedRoute>
              <CustomerDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers/:id/edit"
          element={
            <ProtectedRoute>
              <CustomerEdit />
            </ProtectedRoute>
          }
        />

        <Route
          path="/stored"
          element={
            <ProtectedRoute>
              <Stored />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createProducer"
          element={
            <ProtectedRoute>
              <AddProducerForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editProducer/:id"
          element={
            <ProtectedRoute>
              <EditProducerForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createEmployees"
          element={
            <ProtectedRoute>
              <CreateEmployee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateEmployees/:id"
          element={
            <ProtectedRoute>
              <UpdateEmployee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employeesDetails/:id"
          element={
            <ProtectedRoute>
              <EmployeeDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer />
      {/* </BrowserRouter> */}
    </Router>
  );
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/register" element={<Registering />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/forgotPassword" element={<ForgotPassword />} />
  //       <Route path="/resetPassword/:token" element={<ResetPassword />} />

  //       <Route path="/customer" element={<Customers />} />
  //       <Route path="/addCustomer" element={<AddCustomer />} />
  //       <Route path="/customers/:id" element={<CustomerDetails />} />
  //       <Route path="/customers/:id/edit" element={<CustomerEdit />} />

  //       <Route path="/stored" element={<Stored />} />
  //       <Route path="/createProducer" element={<AddProducerForm />} />
  //       <Route path="/editProducer/:id" element={<EditProducerForm />} />

  //       <Route path="/employees" element={<Employees />} />
  //       <Route path="/createEmployees" element={<CreateEmployee />} />
  //       <Route path="/updateEmployees/:id" element={<UpdateEmployee />} />
  //       <Route path="/employeesDetails/:id" element={<EmployeeDetails />} />
  //     </Routes>
  //     <ToastContainer />
  //   </BrowserRouter>
  // );
}

export default App;
