# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de manifiesto del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Genera el cliente de Prisma
RUN npx prisma generate

# Expone el puerto que tu aplicación usa (3010 en tu main.ts)
EXPOSE 3010

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start"]
