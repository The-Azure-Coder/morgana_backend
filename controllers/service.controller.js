const { JSONResponse } = require("../lib/helper");
const Services = require("../models/service.model");

/**
 * ### Description
 * Get all Dentist
 */
exports.getAllServices = async (req, res) => {
  try {
    const allServices = await Services.find();
    JSONResponse.success(res, "Success.", allServices, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling service Model.", error, 500);
  }
};

/**
 * ### Description
 * Get all Dentist
 */
exports.getServiceById = async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    JSONResponse.success(res, "Success.", service, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling service Model.", error, 500);
  }
};

/**
 * ### Description
 * Creating a service
 */
exports.createService = async (req, res) => {
  try {
    const addService = await Services.create(req.body);
    JSONResponse.success(res, "Success.", addService, 201);
  } catch (error) {
    JSONResponse.error(res, "Failure handling Service model.", error, 500);
    console.log(error);
  }
};

/**
 * ### Description
 * updating a Dentist
 */

exports.updateService = async (req, res) => {
  try {
    const updateService = await Services.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    JSONResponse.success(res, "Success.", updateService, 200);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling servces model.",
      console.log(error),
      500
    );
  }
};

/**
 * ### Description
 * Deleting a detist from list
 */
exports.deleteServiceById = async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    if (service) await service.delete();
    JSONResponse.success(res, "Success.", service, 200);
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
