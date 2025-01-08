# Etapa 1: Build da aplicação
FROM node:18 AS builder

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package.json package-lock.json ./ 

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Build da aplicação Next.js
RUN npm run build

# Etapa 2: Servidor de produção
FROM node:18 AS runner

# Definir o diretório de trabalho
WORKDIR /app

# Copiar apenas os arquivos necessários para rodar a aplicação
COPY --from=builder /app/package.json /app/package-lock.json /app/
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/node_modules /app/node_modules

# Definir a porta que o container vai expor
EXPOSE 3000

# Comando padrão para iniciar o servidor
CMD ["npm", "run", "start"]
