# Stage 1: Build
FROM node:21-alpine3.20 AS builder
WORKDIR /app

# Copy dependencies files
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve Static Files
FROM node:21-alpine3.20 AS runner
WORKDIR /app
RUN npm install -g serve  # Install serve globally

# Copy built files from builder stage
COPY --from=builder /app/dist /app/dist

# Expose the port and run the server
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
