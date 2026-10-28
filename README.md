# Portfólio de Lucas Gabriel Ferreira

Portfólio pessoal em português e inglês, desenvolvido com Next.js App Router, TypeScript e Tailwind CSS. Conteúdo pré-renderizado, sem banco de dados, tracking ou serviços pagos.

## Desenvolvimento

Requisitos: Node.js 22 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000/pt/ ou http://localhost:3000/en/.

## Verificação e build

```sh
npm run lint
npm run typecheck
NEXT_PUBLIC_SITE_URL=https://SEU-ENDERECO npm run build
```

O build gera `out/`, que pode ser publicado em qualquer hospedagem estática. Defina a URL real antes do build de produção: ela alimenta canonical, sitemap e JSON-LD. Sem configuração, o padrão é localhost para desenvolvimento.

## Conteúdo e currículos

`content/profile.json` é a fonte única dos dados profissionais nos dois idiomas. `content/ui.ts` contém os rótulos da interface. Veja CONTENT.md. Os PDFs públicos ficam em `public/cv/`; versões editáveis ficam em `cvs/`. Os documentos originais em `assets/source/` são locais e ignorados pelo Git e pelo deploy.

## Publicação gratuita

A recomendação é Cloudflare Pages Free, por acomodar um portfólio que divulga disponibilidade freelance. Veja HOSTING.md para critérios e fontes. Não é necessário comprar domínio. O nome do subdomínio depende da disponibilidade no momento de criar o projeto.

Conecte este repositório ao Cloudflare Pages, configure `npm run build` e a pasta de saída `out`, e defina `NEXT_PUBLIC_SITE_URL` com a URL de produção. Cada push na branch principal dispara nova publicação. Uma alternativa manual é `npx wrangler pages deploy out --project-name ferreira-api`; requer login e projeto criado.

O projeto também inclui `vercel.json`. O Vercel Hobby tem restrição de uso comercial; não assine plano nem inicie trial para este projeto.

## Idiomas

As páginas `/pt/` e `/en/` são estáticas. A escolha do visitante persiste no navegador. Na Vercel, regras na raiz respeitam o cookie e o cabeçalho Accept-Language. Em hospedagem estática genérica, a raiz consulta a preferência salva e o idioma do navegador. Sem JavaScript, há links diretos para os dois idiomas.

## Dependências

Next.js/React: estrutura e navegação. Tailwind/PostCSS: estilos. TypeScript e ESLint: verificações. Sharp: geração local das imagens sociais e ícones. Não há biblioteca de animação. As versões efetivas são fixadas no package-lock.json.
