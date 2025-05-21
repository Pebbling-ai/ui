FROM node:20-alpine

# Set working directory
WORKDIR /app

# For an optimized build, ensure your .dockerignore file is correctly set up
# to exclude node_modules, .git, .vscode, build, dist, etc., from the build context.
# This prevents them from being unnecessarily copied into the image and speeds up 'COPY . .' if used later.

# Copy package.json and pnpm-lock.yaml to leverage Docker cache.
# These files determine your dependencies, so if they don't change,
# the dependency installation step can be cached.
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install pnpm globally.
# Separating this into its own RUN command allows Docker to cache this layer.
RUN npm install -g pnpm --loglevel error

# Install project dependencies using pnpm.
# This uses pnpm-lock.yaml to ensure reproducible installs.
# --frozen-lockfile: Disallows updates to pnpm-lock.yaml.
# --no-optional: Skips optional dependencies, can speed up installation.
# If this step is still very slow, investigate network speed or specific problematic packages.
RUN echo "Installing dependencies with pnpm..." && \
    pnpm install --frozen-lockfile --no-optional

# Copy the rest of your application's source code.
# This comes after dependency installation so that changes to your code
# don't invalidate the dependency cache.
COPY . .

# Build the application using pnpm.
# This assumes your 'build' script is defined in package.json.
RUN echo "Building application with pnpm..." && \
    pnpm run build

# Install a simple HTTP server to serve static content
# This is installed globally and will be cached if the previous layers are cached.
RUN npm install -g serve --loglevel error

# Expose port
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist", "-l", "3000"]
