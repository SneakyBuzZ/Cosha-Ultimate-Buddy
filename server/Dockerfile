# Use an official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Run Prisma generate to prepare the client
RUN npx prisma generate

# Expose the port your server runs on
EXPOSE 8000

# Define the default command to run your application
CMD [\"sh\", \"-c\", \"npx prisma migrate dev --name 'initial_migration' && npm run dev\"]
