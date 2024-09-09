# Use an official Python runtime as the base image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV NODE_VERSION 18.x

# Set the working directory in the container
WORKDIR /app

# Install Node.js
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy only necessary files
COPY requirements.txt package.json package-lock.json ./

# Install Python and Node.js dependencies
RUN pip install --no-cache-dir -r requirements.txt && \
    npm ci

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run both Flask and Next.js
CMD ["sh", "-c", "python -m flask run --host=0.0.0.0 --port=3000 & npm start"]
