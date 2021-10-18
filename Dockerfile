FROM ubuntu:focal

# Set Environment variables
ENV PLAYWRIGHT_BROWSERS_PATH=/playwright

WORKDIR /playwright

# Install node16
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install --no-install-recommends nodejs && \
    npm install -g npm@8.1.0 && \
    npm i -D @playwright/test && \
    npx playwright install chromium && \
    npx playwright install-deps chromium && \
    rm -rf /var/lib/apt/lists/*

COPY . ./