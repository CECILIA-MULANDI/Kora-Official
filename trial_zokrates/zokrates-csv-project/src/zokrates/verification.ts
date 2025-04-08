import { execSync } from "child_process";

export const verifyProof = () => {
  execSync("bash zokrates/verifyProof.sh", { stdio: "inherit" });
};
