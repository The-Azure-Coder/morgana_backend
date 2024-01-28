const { JSONResponse } = require("../lib/helper");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { validationResult } = require('express-validator');
const {comparePassword, hashPassword } = require("../lib/encrypt");
const { createAccessToken } = require("../lib/token");

exports.loginUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
  }
  const password =req.body.password
  const email = req.body.email
  const existUser = await User.findOne({email: email});
  if(!existUser){
    return res.status(400).json({message:'No Matching records found'})
  }else{
    const isValid = comparePassword(password,existUser.password);
    if(!isValid){
      return res.status(400).json({
        message: "invalid Credentials"
    })
  }

  const accessToken = createAccessToken({existUser: existUser._id})

  res.status(201).json({
    status: "SUCCESS",
    data:existUser,
    token: accessToken
})
 
}
};

exports.registerUser = async (req, res) => {

  try{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    const existUser = await User.findOne({ email });

    if(existUser){
        return res.status(400).json({message:'User already exist'})
    }
    const hashedPassword = hashPassword(password)
    const newUser = await User.create({
        username:username,
        password: hashedPassword,
        email: email
    })
    const accessToken = createAccessToken({newUser: newUser._id})
    return res.status(201).json({
        status: "SUCCESS",
        data:newUser,
        token: accessToken
    })
} catch(err){
 console.log(err)
 return res.status(err?.status || 500).json({ 
        status: "FAILED",
         data: {
             error: err?.message || err 
            } 
        })
     }
 
}

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    JSONResponse.success(res, "Success.", allUsers, 200);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling User Model.",
      console.log(error),
      500
    );
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    JSONResponse.success(res, "Success.", user, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling user Model.", error, 500);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    JSONResponse.success(res, "Success.", updatedUser, 200);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling servces model.",
      console.log(error),
      500
    );
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) await user.delete();
    JSONResponse.success(res, "Success.", user, 200);
  } catch (error) {
    JSONResponse.error(
      res,
      "Failure handling user model.",
      console.log(error),
      500
    );
    console.log(error);
  }
};
