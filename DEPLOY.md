# Deploy — Cloudflare Pages

Guia rápido pra publicar o site da Nalu Odontologia.

---

## 1) Build local (gera a pasta `dist/`)

```bash
cd "C:\Users\egone\OneDrive\Desktop\clientes\nalu-odontologia\identidade\site\nalu-site"
npm install
npm run build
```

Saída: pasta `dist/` com HTML + JS + CSS prontos pra hospedar.

---

## 2) Subir pro Cloudflare Pages

### Opção A — Upload direto (mais simples, sem Git)

1. Acessa [pages.cloudflare.com](https://pages.cloudflare.com) e loga
2. **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
3. Nome do projeto: `nalu-odontologia`
4. Arrasta a pasta `dist/` inteira
5. Clica **Deploy site**
6. Aguarda ~30s. URL final: `https://nalu-odontologia.pages.dev`

### Opção B — Via GitHub (recomendado pra longo prazo)

1. Cria um repositório no GitHub
2. Sobe todo o conteúdo de `nalu-site/` (sem `node_modules/` nem `dist/`)
3. No Cloudflare Pages → **Connect to Git** → seleciona o repo
4. **Build command:** `npm run build`
5. **Build output directory:** `dist`
6. **Node version:** `24` (ou `20` se preferir)
7. Deploy automático a cada `git push`

---

## 3) Domínio próprio (naluodontologia.com.br)

1. Compra o domínio em [registro.br](https://registro.br) (~R$40/ano)
2. No painel Cloudflare Pages → projeto → **Custom domains** → **Set up a custom domain**
3. Adiciona `naluodontologia.com.br` e `www.naluodontologia.com.br`
4. Cloudflare vai mostrar 2 registros DNS pra adicionar no painel do Registro.br
5. Aguarda propagação (até 24h, geralmente 30min)
6. HTTPS é automático via Cloudflare

---

## 4) Configuração já incluída no projeto

- ✅ `public/_redirects` — redireciona rotas SPA pro `index.html` (evita erro 404 ao recarregar)
- ✅ `index.html` com meta tags SEO + Schema.org Dentist
- ✅ Build otimizado (159 KB JS gzipped, 8 KB CSS gzipped)
- ✅ Variáveis sensíveis (se houver) devem ir em **Settings → Environment variables** do Cloudflare

---

## 5) Comandos úteis

```bash
# Dev local (hot reload)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Verificar tipos TypeScript
npx tsc --noEmit
```