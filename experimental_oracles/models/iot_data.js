const mongoose = require("mongoose");

const IoTDataSchema = new mongoose.Schema({
  timestamp: Number,
  latitude: Number,
  longitude: Number,
  speed_kmh: Number,
});

const IoTData = mongoose.model("IoTData", IoTDataSchema);
module.exports = IoTData;
