# Use an official Node.js runtime as the base image
FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller image for the final stage
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only necessary files from the base stage
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
