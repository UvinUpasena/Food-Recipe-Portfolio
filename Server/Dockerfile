FROM node:20

# Set the working directory inside the container
WORKDIR /Server

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all backend files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to start the server
CMD ["npm", "start"]
