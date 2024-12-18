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
    // open the csv file
    let file_path = "./cleaned_data.csv";
    let input_file = File::open(file_path)?;
    let mut rdr = ReaderBuilder::new()
        .has_headers(true)
        .from_reader(input_file);
    // prepare an output file
    let output_file = File::create("cleaned_data_with_all_speeds.csv")?;
    let mut wrt = WriterBuilder::new()
        .has_headers(true)
        .from_writer(output_file);

    // write the headers to the output file
    let headers = rdr.headers()?;
    wrt.write_record(headers)?;

    for result in rdr.deserialize::<IoTData>() {
        let record = result?;

        if record.speed.is_some() {
            wrt.serialize(record)?;
        }
        // println!("{:?}", record);
    }
    println!("Processed data and removed rows without speeds.");
    Ok(())
}
