const express = require("express");
const app = express();
const readData = require("./iotData/readCsv");
const mongoose = require("mongoose");
require("dotenv").config();

// connect to the db
mongoose
  .connect(process.env.mongo_db)
  .then(() => {
    console.log("Connected to the db succesfully");
  })
  .catch((e) => {
    console.log(e);
  });
app.get("/api/iotdata", async (req, res) => {
  try {
    let results = await readData();
    res.status(200).json({
      status: "sucess",
      message: results,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

app.get("/api/highspeeddata/", async (req, res) => {
  let iotdata = mongoose.model("IoTData");
  let results = await iotdata.find({
    speed_kmh: { $gt: 80 },
  });
  const speeds = results.map((data) => data.speed_kmh);
  console.log(speeds);
  res.status(200).json({
    status: "success",
    data: results,
  });
});
// call models
require("./models/iot_data");
app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
