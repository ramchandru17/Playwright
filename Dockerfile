FROM ubuntu:focal

# Install node14
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install --no-install-recommends nodejs

RUN npm install -g npm@8.1.0

# === BAKE BROWSERS INTO IMAGE ===
ENV PLAYWRIGHT_BROWSERS_PATH=/playwright

RUN mkdir /playwright

WORKDIR /playwright

COPY . ./

RUN npm install && \
    npx playwright install chromium &&\
    npx playwright install-deps chromium