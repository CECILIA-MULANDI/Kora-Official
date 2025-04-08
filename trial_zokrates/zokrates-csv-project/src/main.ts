import { readCSVData } from "./csvReader";
import { generateProof } from "./zokrates/proofGenertion";
import { verifyProof } from "./zokrates/verification";

const main = async () => {
  try {
    const data: any = await readCSVData();
    data.forEach((row: any) => {
      const { timestamp, latitude, longitude, speed_kmh } = row;
      try {
        generateProof(timestamp, latitude, longitude, speed_kmh);
        verifyProof();
      } catch (error) {
        console.error("Proof generation or verification failed:", error);
      }
    });
  } catch (error) {
    console.error("Error reading CSV data:", error);
  }
};

main();
