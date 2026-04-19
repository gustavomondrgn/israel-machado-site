FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV DOCKER_BUILD=true

# Build args para o Payload (migrations rodam durante o build).
# Precisam ser expostos como ENV para que `payload migrate` e `next build`
# consigam conectar no banco e ler o secret. No Coolify, marque essas
# variáveis como "Build Variable" além de runtime.
ARG DATABASE_URI
ENV DATABASE_URI=$DATABASE_URI
ARG PAYLOAD_SECRET
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET

# Roda migrations antes do build. O container final (runner) não tem
# tsconfig.json nem os fontes, então migrations aqui é o lugar certo.
RUN pnpm payload migrate

RUN pnpm build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
