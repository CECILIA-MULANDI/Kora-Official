import { execSync } from "child_process";

export const generateProof = (
  timestamp: string,
  latitude: string,
  longitude: string,
  speed_kmh: string
) => {
  execSync(
    `bash zokrates/generateProof.sh ${timestamp} ${latitude} ${longitude} ${speed_kmh}`,
    { stdio: "inherit" }
  );
};
