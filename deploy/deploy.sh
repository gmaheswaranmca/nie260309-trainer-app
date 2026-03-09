#!/bin/bash

echo "Updating server"
sudo apt update

echo "Installing Node"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

echo "Installing Git"
sudo apt install -y git

echo "Installing MongoDB"
sudo apt install -y mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb

echo "Setting up backend"
cd backend
npm install express mongoose multer cors dotenv
npm install
mkdir uploads
chmod 777 uploads
node server.js &

echo "Setting up frontend"
cd ../frontend
npm install axios
npm install
npm run dev

sudo npm install -g serve
serve -s build -l 3000