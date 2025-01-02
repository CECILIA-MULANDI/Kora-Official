use risc0_zkvm::guest::env;
use std::error::Error;
use std::fs::File;
use std::path::Path;
fn read_file<P: AsRef<Path>>(file: P) -> Result<(), Box<dyn Error>> {
    let file_name = File::open(&file)?;
    let reader = io::BufReader::new(file_name)
}
fn main() {
    // TODO: Implement your guest code here

    // read the input
    let input: u32 = env::read();

    // TODO: do something with the input

    // write public output to the journal
    env::commit(&input);
}
