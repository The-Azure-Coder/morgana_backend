const express = require("express");
const router = express.Router();
const IndexController = require("../controllers/index.controller");
const { checkSchema } = require('express-validator');
const registrationSchema = require('../lib/validator');
const loginSchema = require('../lib/validator');

const {
  getAllUsers,
  getUserById,
  loginUser,
  updateUser,
  registerUser,
  deleteUserById,
} = require("../controllers/user.controller");

router.route("/").get(IndexController.index);

router.route("/users").get(getAllUsers);
router.route("/users/login").post(checkSchema(loginSchema),loginUser);
router.route('/users/register')
    .post(checkSchema(registrationSchema), registerUser);

router.route("/users/:id").delete(deleteUserById).get(getUserById);
router.route("/users/update/:id").put(updateUser);

module.exports = router;
