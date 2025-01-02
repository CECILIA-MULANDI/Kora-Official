// use alloy_sol_types::sol;
use serde::{Deserialize, Serialize};
use std::{error::Error, io};

#[derive(Debug, Deserialize)]
struct IotData {
    timestamp: u32,
    latitude: f32,
    longitude: f32,
    speed_kmh: f32,
}

pub fn read_records() -> Result<(), Box<dyn Error>> {
    // we need to build a reader
    let mut reader = csv::Reader::from_reader(io::stdin());
    for result in reader.deserialize() {
        let data: IotData = result?;
    }
    Ok(())
}
