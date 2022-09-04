require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers

// const indexRouter = require();
const dentistRouter = require("./routes/dentist.route");
const serviceRouter = require("./routes/service.route");
const patientRouter = require("./routes/patient.route");
const userRouter = require("./routes/user.route");

// Routes

app.use("/", dentistRouter);
app.use("/", serviceRouter);
app.use("/", patientRouter);
app.use("/", userRouter);

module.exports = app;
