# Docker configuration commented out - not using Docker
# Build stage
# FROM node:18-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci --only=production
# COPY . .
# RUN npm run build

# Production stage
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
#   CMD curl -f http://localhost/ || exit 1
# RUN apk add --no-cache curl
# CMD ["nginx", "-g", "daemon off;"]

# For local development without Docker:
# npm install
# npm start (development server on port 3000)
# npm run build (production build)