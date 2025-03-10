# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN npm run build
RUN npm install
# ==== RUN =======
# Set the env to "developement"
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 5173
# Start the app
CMD [ "npm", "run", "dev" ]