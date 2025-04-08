# zokrates-csv-project

This project integrates CSV data reading with ZoKrates for generating and verifying cryptographic proofs.

## Project Structure

```
zokrates-csv-project
├── src
│   ├── main.ts          # Entry point of the application
│   ├── csvReader.ts     # CSV reading functionality
│   ├── zokrates
│   │   ├── proofGeneration.zok  # ZoKrates proof generation code
│   │   └── verification.zok      # ZoKrates proof verification code
│   └── types
│       └── index.ts     # Type definitions for data points and proofs
├── package.json          # npm configuration and dependencies
├── tsconfig.json         # TypeScript configuration
├── zokrates
│   ├── setup.sh          # Script to set up the ZoKrates environment
│   ├── generateProof.sh   # Script to generate proofs
│   └── verifyProof.sh     # Script to verify proofs
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd zokrates-csv-project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up ZoKrates:**
   Run the setup script to install necessary dependencies:
   ```
   bash zokrates/setup.sh
   ```

## Usage

1. **Run the application:**
   ```
   npm start
   ```

2. **CSV Data Processing:**
   The application reads data from the specified CSV file, processes it, and generates proofs using ZoKrates.

3. **Proof Generation and Verification:**
   - To generate proofs, execute:
     ```
     bash zokrates/generateProof.sh
     ```
   - To verify proofs, execute:
     ```
     bash zokrates/verifyProof.sh
     ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.