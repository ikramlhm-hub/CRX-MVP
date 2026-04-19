# Image de base Node.js
FROM node:20-alpine

# Dossier de travail
WORKDIR /app

# Copie des dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie du code source
COPY . .

# Build de l'application Next.js
RUN npm run build

# Port exposé
EXPOSE 3000

# Démarrage
CMD ["npm", "start"]