// 1. import mongoose
const mongoose = require("mongoose");

// 2. define connection string
const connectionString = process.env.DATABASE;

// 3. connection code
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB atlas connection established");
  })
  .catch((error) => {
    console.log("MongoDB atlas connection error", error);
  });
