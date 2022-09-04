const { JSONResponse } = require("../lib/helper");
const Dentist = require("../models/dentist.model");
const Patient = require("../models/patient.model");

/**
 * ### Description
 * Get all Dentist
 */
exports.getAllDentist = async (req, res) => {
  try {
    const dentists = await Dentist.find();
    JSONResponse.success(res, "Success.", dentists, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling dentist Model.", error, 500);
  }
};

/**
 * ### Description
 * Finding a Single Dentist
 */
exports.getDentistById = async (req, res) => {
  try {
    const dentist = await Dentist.findById(req.params.id);
    JSONResponse.success(res, "Success.", dentist, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling dentist Model.", error, 500);
  }
};

exports.getDentistPatientList = async (req, res) => {
  try {
    const dentist = await Patient.find({ dentistId: req.params.id });
    JSONResponse.success(res, "Success.", dentist, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling dentist Model.", error, 500);
  }
};

/**
 * ### Description
 * Creating a Dentist
 */
exports.createDentist = async (req, res) => {
  try {
    const dentistObj = new Dentist({
      first_nm: req.body.first_nm,
      last_nm: req.body.last_nm,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      docDescrip: req.body.docDescrip,
      docImg: req.body.docImg,
    });
    const dentist = await Dentist.create(dentistObj);
    JSONResponse.success(res, "Success.", dentist, 201);
  } catch (error) {
    JSONResponse.error(res, "Failure handling dentist model.", error, 500);
    console.log(error);
  }
};

/**
 * ### Description
 * updating a Dentist
 */

exports.updateDentist = async (req, res) => {
  try {
    const dentist = await Dentist.findByIdAndUpdate(req.params.id, req.body);
    JSONResponse.success(res, "Success.", dentist, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling dentist model.", error, 500);
  }
};

/**
 * ### Description
 * Deleting a detist from list
 */
exports.deleteDentistById = async (req, res) => {
  try {
    const dentist = await Dentist.findById(req.params.id);
    if (dentist) await dentist.delete();
    JSONResponse.success(res, "Success.", dentist, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling Dentist model.", error, 500);
    console.log(error);
  }
};
