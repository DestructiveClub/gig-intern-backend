const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { dbConnect } = require("./config/dbConnect.js");

const port = 5000;

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "POST",
//     withCredentials: true,
//   })
// );

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(port || 4000, () => {
  dbConnect();
  console.log(`Server is connected to port ${port || 4000}`);
});
