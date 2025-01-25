# Base image for Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project (excluding files in .dockerignore)
COPY . .

# Build for production
RUN npm run build

# Default command for production
CMD ["npm", "run", "start"]
