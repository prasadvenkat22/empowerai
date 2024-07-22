# Use an official Node runtime as a parent image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Install Python and pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy requirements.txt and install Python dependencies
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the Next.js application
CMD ["npm", "start"]
