# Usar una imagen base de Node.js
FROM node:14-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y el package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de la aplicación al directorio de trabajo
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto que usará la aplicación
EXPOSE 3100

# Definir el comando por defecto para ejecutar la aplicación
CMD ["npm", "run", "debug"]
