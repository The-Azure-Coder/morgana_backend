const express = require("express");
const router = express.Router();
const IndexController = require("../controllers/index.controller");

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
router.route("/users/login").post(loginUser);
router.route("/users/register").post(registerUser);
router.route("/users/:id").delete(deleteUserById).get(getUserById);
router.route("/users/update/:id").put(updateUser);

module.exports = router;
