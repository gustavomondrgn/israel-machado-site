FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# ---------- Dependencies ----------
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---------- Builder ----------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# PAYLOAD_SECRET é lido quando o withPayload gera o admin manifest
# durante `next build`. Precisa estar disponível como ENV (marcar como
# Build Variable no Coolify).
ARG PAYLOAD_SECRET
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET

# O banco de produção NÃO é acessível durante o build. A dummy URI só
# serve para o postgresAdapter parsear a connection string sem explodir.
# Nenhuma query roda no build — todas as páginas que usam Payload estão
# marcadas como force-dynamic.
ENV DATABASE_URI=postgres://dummy:dummy@127.0.0.1:5432/dummy

RUN pnpm build

# ---------- Runner ----------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# IMPORTANTE: não usamos `output: "standalone"` do Next. O tracer do
# standalone só inclui módulos realmente importados pelo server, e a CLI
# do Payload (`payload migrate`) nunca é importada em runtime — fica de
# fora, resultando em MODULE_NOT_FOUND ao rodar migrations.
# Por isso copiamos a árvore completa: .next, node_modules, fontes e
# config. Todas as migrations do Payload ficam disponíveis em runtime.
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./next.config.mjs
COPY --from=builder --chown=nextjs:nodejs /app/payload.config.ts ./payload.config.ts
COPY --from=builder --chown=nextjs:nodejs /app/tsconfig.json ./tsconfig.json
COPY --from=builder --chown=nextjs:nodejs /app/src ./src

COPY --chown=nextjs:nodejs docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Entrypoint roda `payload migrate` (idempotente) e em seguida `next start`.
# A cada redeploy, novas migrations commitadas em src/migrations/ são
# aplicadas automaticamente antes do servidor subir.
CMD ["./docker-entrypoint.sh"]
