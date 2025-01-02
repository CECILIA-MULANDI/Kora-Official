#![no_main]
sp1_zkvm::entrypoint!(main);

use fibonacci_lib::{read_records, IotData};

pub fn main() {
    //1. get the file path
    let file_path = "../../data_files/iot.csv";
    // 2.read the data from the file
    // let records = read_records(&file_path).expect("There was an error reading the file");
    let records = read_records(file_path).unwrap_or_else(|_| {
        println!("Error reading records from file: {}", file_path);
        vec![]
    });
    for record in records {
        if record.speed_kmh > 80.0 {
            let bytes = serde_json::to_vec(&record).expect("Failed to serialize record");
            sp1_zkvm::io::commit_slice(&bytes);
        }
    }
}
