import pandas as pd
import matplotlib.pyplot as plt

# File path for the cleaned .csv file
csv_file_path = "cleaned_data.csv"

# Load the cleaned .csv file into a DataFrame
df = pd.read_csv(csv_file_path)

# 1. Basic Analysis: Calculate average speed
average_speed = df['speed_kmh'].mean()
print(f"Average speed: {average_speed:.2f} km/h")

# 2. Visualization: Plot speed over time
plt.figure(figsize=(10, 6))
plt.plot(df['timestamp'], df['speed_kmh'], label="Speed (km/h)", color='b')
plt.xlabel("Timestamp")
plt.ylabel("Speed (km/h)")
plt.title("Speed over Time")
plt.legend()
plt.grid(True)
plt.savefig("speed_over_time.png")  # Save the plot as an image file
plt.close()  # Close the plot to avoid memory issues

# 3. Visualization: Plot the locations (Latitude vs Longitude)
plt.figure(figsize=(10, 6))
plt.scatter(df['longitude'], df['latitude'], c=df['speed_kmh'], cmap='viridis', label="Speed")
plt.colorbar(label='Speed (km/h)')
plt.xlabel("Longitude")
plt.ylabel("Latitude")
plt.title("Location with Speed Information")
plt.legend()
plt.grid(True)
plt.savefig("location_with_speed.png")  # Save the plot as an image file
plt.close()  # Close the plot to avoid memory issues

# Optional: Save the average speed and some basic analysis to a text file
with open("analysis.txt", "w") as f:
    f.write(f"Average speed: {average_speed:.2f} km/h\n")
    f.write(f"Number of records: {len(df)}\n")
    f.write("Data analysis complete.\n")

print("Data analysis complete. Visualizations and analysis saved.")
