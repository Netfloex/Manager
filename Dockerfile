ARG NODE_IMAGE=node:12-alpine

FROM $NODE_IMAGE AS deps
WORKDIR /app

# Copy all package.json's
COPY package.json yarn.lock ./
COPY packages/server/package.json ./packages/server/
COPY packages/frontend/package.json ./packages/frontend/

RUN yarn install --frozen-lockfile


FROM $NODE_IMAGE AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=deps /app/node_modules ./node_modules

COPY package.json yarn.lock ./
COPY packages ./packages

RUN yarn --cwd packages/server build
RUN yarn --cwd packages/frontend build && yarn --cwd packages/frontend export

FROM nginx:stable-alpine AS runner
WORKDIR /app

RUN apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/v3.11/main/ nodejs=12.22.6-r0 && \
	apk add --no-cache bash
COPY --from=builder /app/packages/frontend/out /usr/share/nginx/html

COPY --from=builder /app/packages/server/dist/index.js ./socket.js

COPY entrypoint.sh .
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "./entrypoint.sh" ]