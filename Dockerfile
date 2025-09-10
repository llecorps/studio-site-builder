# ---- Build stage ----
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    # If you use npm (package-lock.json)
    COPY package*.json ./
    RUN npm ci
    
    # If you use pnpm or bun, swap the installer accordingly:
    # COPY pnpm-lock.yaml ./
    # RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm i --frozen-lockfile
    # or:
    # COPY bun.lockb ./
    # RUN npm i -g bun && bun install --frozen-lockfile
    
    # Bring in the code and build
    COPY . .
    # Make sure your package.json has: "build": "vite build"
    RUN npm run build
    
    # ---- Runtime stage ----
    FROM nginx:stable-alpine AS runner
    # Basic Nginx config for SPA routing
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    # Copy static assets
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    