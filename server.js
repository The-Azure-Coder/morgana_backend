require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

// Start Express App

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
  if (err) throw err;

  console.log("MongoDB Connected Successfully");

  const PORT = process.env.PORT || 3100;
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});
