const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const { dbConnect } = require("./config/dbConnect");

dotenv.config();

app.listen(process.env.PORT || 4000, () => {
  dbConnect();
  console.log(`Server is listening on on port ${process.env.PORT || 4000}`);
});
