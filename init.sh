#!/bin/bash

# Navigate to the server folder, install dependencies, and start the server in development mode
cd server || exit
npm install -d
npm run build && npm run serve $1 &

# Navigate to the client folder, install dependencies, and start the client in development mode
cd ../client || exit
npm install -d
npm run dev &

# Wait for both processes to complete
wait

