# Base image for Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project (excluding files in .dockerignore)
COPY . .

# Expose the port your application runs on
EXPOSE 3000


# Default command for production
CMD ["npm", "run", "dev"]
