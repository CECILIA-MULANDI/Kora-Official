const { PrivateKey, Signature, Field } = require("o1js");
const express = require("express");
const mongoose = require("mongoose");
const IoTData = require("./models/iot_data");
require("dotenv").config();

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.mongo_db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB successfully"))
  .catch((e) => console.log(e));

// Oracle Private Key for signing (store securely!)
const oraclePrivateKey = PrivateKey.random();
const oraclePublicKey = oraclePrivateKey.toPublicKey();
console.log("Oracle Public Key:", oraclePublicKey.toBase58());

// Function to fetch high-speed data
async function getHighSpeedData() {
  try {
    const results = await IoTData.find({ speed_kmh: { $gt: 80 } }).limit(1);

    if (!results.length) {
      throw new Error("No high-speed data found");
    }

    const { _id, speed_kmh } = results[0];

    // Convert values to Field (o1js format)
    const speedField = Field(speed_kmh);

    // Generate Signature
    const signature = Signature.create(oraclePrivateKey, [speedField]);

    return {
      id: _id.toString(),
      speed: speed_kmh,
      signature: signature.toBase58(), // Convert signature to string format
    };
  } catch (error) {
    console.error("Error in getHighSpeedData():", error);
    throw error;
  }
}

// API Endpoint
app.get("/api/highspeeddata", async (req, res) => {
  try {
    const data = await getHighSpeedData();
    res.json({ status: "success", data: [data] });
  } catch (error) {
    console.error("Error fetching high-speed data:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Start Server
app.listen(8000, () => console.log("Server is running at port 8000"));
