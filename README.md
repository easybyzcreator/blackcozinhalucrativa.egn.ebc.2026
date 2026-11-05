# Aplicativo da Marmitaria EGN · BLACK Cozinha Lucrativa Oficial

Página de vendas oficial de alta conversão para a BLACK Cozinha Lucrativa do aplicativo exclusivo para marmitarias desenvolvido com a metodologia da **Escola de Gastronomia e Negócios (EGN)** da **Chef Gabi Paludo** e tecnologia **Easy Byz Creator**.

---

## 🚀 Como Rodar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Gere a build de produção:**
   ```bash
   npm run build
   ```

4. **Visualize a build:**
   ```bash
   npm run preview
   ```

---

## 📦 Como Subir para o GitHub

1. Inicialize o repositório Git local (se ainda não tiver feito):
   ```bash
   git init
   git add .
   git commit -m "feat: landing page black friday app egn"
   ```

2. Crie um novo repositório no seu GitHub (exemplo: `app-marmitaria-egn`).

3. Vincule e envie o código:
   ```bash
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/app-marmitaria-egn.git
   git push -u origin main
   ```

---

## ⚡ Como Publicar na Vercel

O projeto já inclui o arquivo `vercel.json` configurado para roteamento SPA sem erros de 404.

### Opção 1: Direto pelo painel da Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com) e faça login com seu GitHub.
2. Clique em **"Add New..."** > **"Project"**.
3. Selecione o repositório `app-marmitaria-egn` que você acabou de subir no GitHub.
4. As configurações padrão já são detectadas automaticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**. Em menos de 1 minuto seu site estará no ar com link seguro `https://...` e certificado SSL gratuito!

### Opção 2: Pela CLI da Vercel
```bash
npx vercel
```
Para deploy de produção:
```bash
npx vercel --prod
```

---

## 🛠 Tecnologias Utilizadas
- **React 19**
- **Vite 8**
- **Tailwind CSS 4**
- **TypeScript**
- **Lucide Icons**
