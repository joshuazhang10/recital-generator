# Use Node.js LTS version
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose React's default port
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]