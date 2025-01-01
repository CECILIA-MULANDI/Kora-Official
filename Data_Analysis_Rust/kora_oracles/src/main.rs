use csv::{ReaderBuilder, WriterBuilder};
use serde::{Deserialize, Serialize};
use std::{error::Error, fs::File};

#[derive(Debug, Serialize, Deserialize)]
struct IoTData {
    timestamp: i64,
    latitude: f64,
    longitude: f64,
    #[serde(rename = "speed_kmh")]
    speed: Option<f64>,
}

fn main() -> Result<(), Box<dyn Error>> {
    // Open the CSV file
    let file_path = "./cleaned_data.csv";
    let input_file = File::open(file_path)?;
    let mut rdr = ReaderBuilder::new()
        .has_headers(true)
        .from_reader(input_file);

    // Prepare an output file
    let output_file = File::create("filtered_data.csv")?;
    let mut wrt = WriterBuilder::new()
        .has_headers(true)
        .from_writer(output_file);

    // Write the headers to the output file
    let headers = rdr.headers()?.clone();
    wrt.write_record(headers.iter())?;

    // Define speed limit
    let speed_limit = 80.0;

    // Process each record
    for result in rdr.deserialize::<IoTData>() {
        let record = result?;
        if let Some(speed) = record.speed {
            if speed > speed_limit {
                println!(
                    "Speed exceeded! Timestamp: {:?}, Speed: {:?} km/h",
                    record.timestamp, speed
                );
                wrt.serialize(record)?; // Write record to output file
            }
        }
    }

    println!("Filtered data has been written to 'filtered_data.csv'.");
    Ok(())
}
