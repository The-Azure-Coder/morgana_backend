const express = require("express");
const router = express.Router();
const IndexController = require("../controllers/index.controller");

const {
  getAllServices,
  createService,
  getServiceById,
  deleteServiceById,
  updateService,
} = require("../controllers/service.controller");

router.route("/").get(IndexController.index);

router.route("/services").post(createService).get(getAllServices);
router.route("/services/:id").delete(deleteServiceById).get(getServiceById);
router.route("/services/update/:id").put(updateService);

module.exports = router;
