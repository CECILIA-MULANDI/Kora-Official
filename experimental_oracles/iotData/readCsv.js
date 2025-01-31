const fs = require("fs");
const csv = require("csv-parser");
const iotData = require("../models/iot_data");
const mongoose = require("mongoose");
const path = require("path");
const readData = async () => {
  return new Promise((resolve, reject) => {
    const iotData = mongoose.model("IoTData");
    let results = [];
    const filePath = path.join(__dirname, "iot_data.csv"); // Use absolute path

    if (!fs.existsSync(filePath)) {
      return reject(new Error("CSV file not found at " + filePath));
    }
    fs.createReadStream(filePath)
      .pipe(
        csv({
          delimiter: ",",
          from_line: 2, // Skip header
        })
      )
      .on("data", async (row) => {
        results.push(row);
        await iotData.create(row);
      })
      .on("end", () => {
        resolve(results); // Resolve with collected data
      })
      .on("error", (error) => {
        reject(error); // Reject if error occurs
      });
  });
};

module.exports = readData;
