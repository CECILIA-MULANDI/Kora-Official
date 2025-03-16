#!/bin/bash

# This script sets up the ZoKrates environment and installs necessary dependencies.

# Update package list and install required packages
sudo apt-get update
sudo apt-get install -y git curl

# Install ZoKrates
curl -L https://github.com/Zokrates/ZoKrates/releases/latest/download/zokrates-linux -o zokrates
chmod +x zokrates
sudo mv zokrates /usr/local/bin/

# Verify installation
zokrates version

echo "ZoKrates setup completed successfully."