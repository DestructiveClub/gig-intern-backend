const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { dbConnect } = require("./config/dbConnect.js");
//routes
const studentRouter = require("./routes/studentRoutes.js");

const port = 5000;

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "POST",
//     withCredentials: true,
//   })
// );
app.get("/", (req,res)=>{
  res.send("The Gig intern backend server has been Deployed")
})
app.use(express.json());
app.use(cors({origin: "https://localhost:5173", credentials: true}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", studentRouter);

app.listen(port || 4000, () => {
  dbConnect();
  console.log(`Server is connected to port ${port || 4000}`);
});
