# Stage 1: Build the React app using Vite
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY Client/package.json Client/package-lock.json* ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY Client/ .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using Nginx for production
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration (if any)
# COPY Client/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]