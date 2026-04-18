# Deploy — Israel Machado Site

## Pré-requisitos

- Servidor Hetzner com Coolify instalado
- Docker configurado no servidor
- Repositório GitHub conectado ao Coolify

## 1. Criar banco PostgreSQL no Coolify

1. No painel do Coolify, vá em **Resources > New Resource > Database > PostgreSQL**
2. Configure:
   - Nome: `israel-machado-db`
   - Usuário: `payload`
   - Senha: (gere uma senha segura)
   - Database: `israel_machado`
3. Anote a connection string: `postgresql://payload:SENHA@HOST:5432/israel_machado`

## 2. Configurar variáveis de ambiente no Coolify

No serviço da aplicação, configure as variáveis:

```
DATABASE_URI=postgresql://payload:SENHA@HOST:5432/israel_machado
PAYLOAD_SECRET=<chave-secreta-com-pelo-menos-32-caracteres>
NEXT_PUBLIC_SERVER_URL=https://seudominio.com
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=contato@israelmachado.com.br
```

**Importante:** `PAYLOAD_SECRET` deve ter no mínimo 32 caracteres. Gere com:
```bash
openssl rand -base64 32
```

## 3. Conectar repositório GitHub

1. No Coolify, crie um novo **Application > Docker**
2. Conecte ao repositório GitHub
3. Branch: `main`
4. Dockerfile: `Dockerfile` (raiz do projeto)
5. Build args: adicione `DATABASE_URI` e `PAYLOAD_SECRET` como build arguments
6. Porta exposta: `3000`

## 4. Primeiro deploy

1. Faça push para a branch `main`
2. O Coolify detecta e inicia o build automaticamente
3. Aguarde o build (pode levar 3-5 minutos)
4. Acesse `https://seudominio.com` para verificar o site
5. Acesse `https://seudominio.com/admin` para o painel Payload

## 5. Criar primeiro usuário admin

1. Acesse `https://seudominio.com/admin`
2. Na primeira vez, o Payload exibe o formulário de criação de conta
3. Preencha email e senha do administrador
4. Faça login com as credenciais criadas

## 6. Rodar o seed inicial

Para popular os dados iniciais (categorias, ensaio Antígona, depoimentos, configurações):

```bash
# Via SSH no servidor, dentro do container:
docker exec -it <container_id> sh
npx tsx src/seed/index.ts

# Ou localmente com o banco remoto:
DATABASE_URI=postgresql://... PAYLOAD_SECRET=... pnpm seed
```

## Estrutura de rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home |
| `/servicos` | Serviços |
| `/ensaios` | Lista de ensaios |
| `/ensaios/[slug]` | Ensaio individual |
| `/psicologia-cientifica` | Psicologia Científica |
| `/psicologia-cientifica/[slug]` | Artigo individual |
| `/depoimentos` | Depoimentos |
| `/area/[slug]` | Área clínica |
| `/admin` | Painel Payload CMS |
| `/api/*` | API Payload |
| `/api/contact` | Formulário de contato (Resend) |

## Domínio personalizado (Resend)

Para emails enviados do formulário de contato aparecerem com domínio próprio:

1. Acesse [resend.com](https://resend.com) e verifique seu domínio
2. Adicione os registros DNS (MX, TXT) conforme instruções do Resend
3. Atualize o remetente em `src/app/api/contact/route.ts` de `onboarding@resend.dev` para `contato@seudominio.com`
