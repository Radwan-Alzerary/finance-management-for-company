import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import Connection from "./database/db.js";
import customersRouter from "./routers/customersRoute.js";
import storedRouter from "./routers/StoredRoutes.js";
import employeeRouter from "./routers/EmployeesRoute.js";
import authRoutes from "./routers/authRoute.js";
import HomeRoutes from "./routers/HomeRoutes.js"

const app = express();

dotenv.config();

app.use(bodyParser.json()); 
const corsOptions = {
  origin: [
    /^(http:\/\/.+:3000)$/,
    /^(http:\/\/.+:80)$/,
    /^(http:\/\/.+:8080)$/,
    /^(http:\/\/.+:8081)$/,
  ],
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.use("/", HomeRoutes);
app.use("/auth", authRoutes);
app.use("/customers", customersRouter);
app.use("/stored", storedRouter);
app.use("/employee", employeeRouter);

const PORT = process.env.PORT || 8080;


Connection();

app.listen(PORT, () =>
  console.log(`Server is running successfully on http://localhost:${PORT}`)
);
