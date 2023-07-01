const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb+srv://gigintern:gigintern@gigintern.avcp7rs.mongodb.net/")
    .then(() => {
        console.log("Database Connection is Successful");
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports={
    dbConnect
}
