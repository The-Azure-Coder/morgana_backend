const db = require("mongoose");

let dentistSchema = new db.Schema({
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

  docImg: {
    type: String,
    required: true,
    default:
      "https://www.pngitem.com/pimgs/m/413-4131087_line-art-head-okay-cartoon-doctor-image-png.png",
  },

  docDescrip: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
});

module.exports = db.model("dentist", dentistSchema);
