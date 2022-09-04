const { JSONResponse } = require("../lib/helper");
const Patient = require("../models/patient.model");

/**
 * ### Description
 * Get all Patients
 */
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find()
      .populate("serviceId")
      .populate("dentistId");
    JSONResponse.success(res, "Success.", patients, 200);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling patient Model.",
      console.log(error),
      500
    );
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id)
      .populate("dentistId")
      .populate("serviceId");
    console.log(patient);
    JSONResponse.success(res, "Success.", patient, 200);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling patient Model.",
      console.log(error),
      500
    );
  }
};

exports.getPatientInfo = async (req, res) => {
  try {
    const patient = await Patient.findOne(req.body)
      .populate("dentistId")
      .populate("serviceId");
    console.log(patient);
    JSONResponse.success(res, "Success.", patient, 200);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling patient Model.",
      console.log(error),
      500
    );
  }
};

/**
 * ### Description
 * Creating a patient
 */
exports.createPatient = async (req, res) => {
  try {
    const patientObj = new Patient({
      first_nm: req.body.first_nm,
      last_nm: req.body.last_nm,
      email: req.body.email,
      address: req.body.address,
      dentistId: req.body.dentistId,
      serviceId: req.body.serviceId,
      phoneNumber: req.body.phoneNumber,
      dob: req.body.dob,
      age: req.body.age,
    });
    const addPatient = await Patient.create(patientObj);
    JSONResponse.success(res, "Success.", addPatient, 201);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling Service model.",
      console.log(error),
      500
    );
    console.log(error);
  }
};

/**
 * ### Description
 * updating a Patient
 */

exports.updatePatient = async (req, res) => {
  try {
    const updatePatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    JSONResponse.success(res, "Success.", updatePatient, 200);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling patient model.",
      console.log(error),
      500
    );
  }
};

/**
 * ### Description
 * Deleting a Patient
 */
exports.deletePatienttById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (patient) await patient.delete();
    JSONResponse.success(res, "Success.", patient, 200);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling services model.",
      console.log(error),
      500
    );
    console.log(error);
  }
};
