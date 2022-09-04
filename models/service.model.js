const db = require("mongoose");

let serviceSchema = new db.Schema({
  serviceName: {
    type: String,
    trim: true,
    unique: true,
  },

  serviceCost: {
    type: Number,
    trim: true,
    required: true,
  },
  serviceImg: {
    type: String,
    trim: true,
    default:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/08/Dentist-Senior-Mouth-Teeth-1296x728-Header.jpg?w=1155&h=1528",
  },

  serviceImg2: {
    type: String,
    trim: true,
    default: "/assets/images/cleaning.png",
  },
  serviceDescrip: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = db.model("service", serviceSchema);
