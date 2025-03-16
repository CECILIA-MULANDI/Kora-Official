import fs from "fs";
import path from "path";
import csv from "csv-parser";

const csvFilePath = path.join(
  __dirname,
  "../../../experimental_oracles/iotData/iot_data.csv"
);

export const readCSVData = () => {
  const results: any[] = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
};
