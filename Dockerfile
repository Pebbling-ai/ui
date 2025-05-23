FROM node:20-alpine

WORKDIR /app

COPY package.json ./


RUN npm install -g pnpm --loglevel error

RUN echo "Installing base dependencies..." && \
    pnpm install --no-optional

# Attempt to explicitly install the missing optional dependency
RUN echo "Attempting to install optional Rollup dependency..." && \
    pnpm add --optional @rollup/rollup-linux-x64-musl

COPY . .

RUN echo "Building application with pnpm..." && \
    pnpm run build

RUN npm install -g serve --loglevel error

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
