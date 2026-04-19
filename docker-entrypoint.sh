#!/bin/sh
set -e

# Sanity check: em runtime o DATABASE_URI real precisa estar presente
# (vem das variáveis de ambiente do Coolify).
if [ -z "$DATABASE_URI" ] || [ "$DATABASE_URI" = "postgres://dummy:dummy@127.0.0.1:5432/dummy" ]; then
  echo "[entrypoint] ERRO: DATABASE_URI não está definido em runtime."
  echo "[entrypoint] Defina a variável no Coolify (Runtime + Build)."
  exit 1
fi

echo "[entrypoint] Aplicando migrations do Payload..."
pnpm payload migrate

echo "[entrypoint] Iniciando Next.js..."
exec pnpm start
