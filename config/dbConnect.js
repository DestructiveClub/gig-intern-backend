const mongoose = require("mongoose");

const { NODE_ENV, MONGO_ATLAS_URI, MONGO_LOCAL_URI } = process.env;

let mongoUri;

switch (NODE_ENV) {
  case "development":
    mongoUri = MONGO_LOCAL_URI;
    break;

  case "production":
    mongoUri = MONGO_ATLAS_URI;
    break;

  default:
    mongoUri = MONGO_ATLAS_URI;
}

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log(`Database Connection is Successful`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  dbConnect,
};
