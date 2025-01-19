const MONGO_URI = process.env.MONGO_URI;
const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.error(err));