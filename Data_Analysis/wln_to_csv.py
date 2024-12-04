import pandas as pd

# File path for the .wln file
file_path = "./iot_data.wln"

# Open the .wln file and read lines
with open(file_path, "r") as file:
    lines = file.readlines()

# List to store the extracted data
data = []

# Loop through each line in the file
for line in lines:
    parts = line.split(";")  # Split data by semicolon
    
    # Ensure the line has enough parts to avoid index errors
    if len(parts) > 5:
        # Extract relevant fields: timestamp, latitude, longitude, speed
        timestamp = parts[1]
        latitude = parts[2]
        longitude = parts[3]
        speed_kmh = parts[5]  # Assuming speed is in the 6th field
        
        # Add data to the list
        data.append({
            "timestamp": int(timestamp),
            "latitude": float(latitude),
            "longitude": float(longitude),
            "speed_kmh": float(speed_kmh),
        })

# Convert the data list into a pandas DataFrame
df = pd.DataFrame(data)

# Save the DataFrame to a .csv file
df.to_csv("cleaned_data.csv", index=False)

# Optionally, print the first few rows of the DataFrame
print(df.head())
