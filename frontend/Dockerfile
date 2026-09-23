# Etapa de construcción
FROM node:22-alpine AS build
WORKDIR /app
# Habilitar pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package*.json pnpm-lock.yaml* ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Etapa de producción
FROM nginx:alpine
# Copiamos la compilación a la carpeta de nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Copiamos nuestra configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
