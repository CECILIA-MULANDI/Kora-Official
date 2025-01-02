// use alloy_sol_types::sol;
use serde::{Deserialize, Serialize};
use std::{error::Error, fs::File};

#[derive(Debug, Deserialize, Serialize)]
pub struct IotData {
    pub timestamp: u32,
    pub latitude: f32,
    pub longitude: f32,
    pub speed_kmh: f32,
}

pub fn read_records(file_path: &str) -> Result<Vec<IotData>, Box<dyn Error>> {
    // we need to build a reader
    let file = File::open(&file_path)?;
    let mut reader = csv::Reader::from_reader(file);
    let mut records = Vec::new();
    for result in reader.deserialize() {
        let data: IotData = result?;
        records.push(data);
    }
    Ok(records)
}
