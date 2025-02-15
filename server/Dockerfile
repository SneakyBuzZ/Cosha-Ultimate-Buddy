# Base image for Node.js
FROM node:18-alpine

# Install openssl
RUN apk update && apk upgrade
RUN apk add --no-cache openssl

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the entire project (excluding files in .dockerignore)
COPY . .

# Expose port
EXPOSE 8000

# Start in development mode (run migrations & start server)
CMD npm run start