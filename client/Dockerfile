# Base image for Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project (excluding files in .dockerignore)
COPY . .

# Expose port
EXPOSE 3000

# Default command for development
CMD ["npm", "run", "dev"]
