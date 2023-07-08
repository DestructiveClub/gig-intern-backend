const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { dbConnect } = require("./config/dbConnect.js");
//routes
const studentRouter = require('./routes/studentRoutes.js')

const port = 5000;
dotenv.config();

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

app.use('/api/v1', studentRouter)

app.listen(port || 4000, () => {
  dbConnect();
  console.log(`Server is connected to port ${port || 4000}`);
});
