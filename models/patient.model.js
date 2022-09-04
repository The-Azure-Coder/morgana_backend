const db = require("mongoose");
const Schema = db.Schema;

let patientSchema = new db.Schema({
  first_nm: {
    type: String,
    required: true,
    trim: true,
  },
  last_nm: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
  },

  age: {
    type: Number,
    trim: true,
  },

  dob: {
    type: Date,
    required: true,
  },
  dentistId: {
    type: Schema.Types.ObjectId,
    ref: "dentist",
  },
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: "service",
  },
  regDate: {
    type: Date,
    default: Date.now(),
  },
  appointDate: {
    type: Date,
    default: new Date(Date.now() + 12096e5),
  },
});

module.exports = db.model("patient", patientSchema);
