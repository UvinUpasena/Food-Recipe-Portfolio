# Use Node.js image to build the React app
FROM node:20 AS build

# Set working directory
WORKDIR /Client

# Copy package.json and install dependencies
COPY package.json ./
COPY vite.config.js ./
RUN npm install

# Copy the rest of your frontend files and build the app
COPY . .
RUN npm run build

# Now use Nginx to serve the build files
FROM nginx:alpine

# Copy the React build files into Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to serve the frontend
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
