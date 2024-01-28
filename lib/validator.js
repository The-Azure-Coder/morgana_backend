// registrationSchema.js
const { checkSchema } = require('express-validator');

const registrationSchema = {
  username: {
    notEmpty: true,
    errorMessage: "username field cannot be empty",

  },
  password: {
    isStrongPassword: {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1
    },
    errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
  },
  email: {
    notEmpty: true,
    errorMessage: "email field cannot be empty",
    isEmail: {
      errorMessage: "Invalid email format"
    },

  }

}
const loginSchema = {
  email: {
    notEmpty: true,
    errorMessage: "email field cannot be empty",
    isEmail: {
      errorMessage: "Invalid email format"
    },
  },

  password: {
    isStrongPassword: {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1
    },
    errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
  },


}
module.exports = registrationSchema
module.exports = loginSchema
