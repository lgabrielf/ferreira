# Decisões

## Descoberta
- Fontes localizadas em `/Users/lucasferreira/Documents/personal`. Os dois PDFs foram copiados para `assets/source/`; originais preservados.
- O prompt anexado à conversa é mais completo e prevalece sobre `prompt-codex-portfolio.md` encontrado na pasta pessoal.
- Implementação e hospedagem seguirão a escolha explícita Next.js + Vercel.
- Os originais, extrações e dados privados não integrarão o repositório público nem o deploy. `assets/source/` será ignorado pelo Git e pelo empacotamento de deploy.
- Nenhum telefone nem endereço residencial será publicado sem autorização explícita.
- Existem links incorporados no PDF: GitHub `https://github.com/lgabrielf` e LinkedIn `https://www.linkedin.com/in/lucasgbferreira/`.
- Há foto incorporada ao currículo de uma página; não há foto avulsa entre os arquivos encontrados.
- Classificação preliminar: `vittae_ENG.pdf` é o candidato ATS por não conter foto e apresentar estrutura simples; `Lucas_Ferreira_CV.pdf` parece uma adaptação focada em backend e Suíça, com foto. Esta é uma inferência, não uma identificação confirmada pelo autor.

## Respostas da Fase 0

- DB2 encerrada em abril de 2026, confirmado pelo usuário. Localidade neutra Brasil porque sede/modelo não foram explicitamente esclarecidos.
- IMD/LABCOMU e Geowellex ativos; Engenharia de Computação em andamento.
- Disponibilidade para vagas e freelance. Nome completo e foco backend mantidos. Inglês B2 autoavaliado.
- Suíça e alemão removidos: currículo anterior era adaptado a uma vaga específica.
- Apple, e-mail, GitHub e LinkedIn autorizados para publicação. Foto existente autorizada.
- Acrescentados logs, Elasticsearch, Prometheus, sincronização e arquitetura hub-spoke conforme resposta. Não houve acesso ao repositório profissional; nenhuma arquitetura detalhada ou efeito quantitativo foi inferido.
- Os 80% não foram usados como destaque porque o escopo continua ambíguo. As entregas técnicas descrevem melhor o trabalho sem fazer promessas numéricas.
- Projetos e certificações omitidos por ausência de material. A bio foi redigida a partir das fontes e fica disponível para revisão.

## Implementação e gratuidade

- Next.js estável instalado do registro npm; versão efetiva registrada no lockfile. Saída estática permite hospedagem gratuita sem runtime de aplicação.
- Export estático não suporta redirecionamento dinâmico de servidor por Accept-Language. Na Vercel, regras da plataforma tratam cookie/cabeçalho; em hosts genéricos, a raiz usa preferência salva/idioma do navegador e oferece links sem JavaScript.
- Imagem extraída do próprio currículo, 347 x 416 px, convertida em WebP. Sem imagem gerada nem banco de fotos.
- Identidade editorial com acento ferrugem, aludindo de forma discreta ao sobrenome Ferreira. Sem biblioteca de animação.
- Preferência atual do usuário: custo zero, sem trial. Pesquisa recomenda Cloudflare Pages Free em vez de Vercel Hobby devido à divulgação de serviços freelance. Nenhum domínio comprado ou plano pago ativado.
- Open Graph usa PNGs PT/EN pré-gerados pelo script `scripts/generate-social.mjs`, evitando função de imagem em runtime e mantendo compatibilidade com export estático.
- O conteúdo JSON recebe validação estrutural TypeScript em `content/profile.ts`, compartilhada entre PT e EN.
- A troca de idioma reaplica a preferência de tema e desloca para o mesmo identificador de seção após atualizar o conteúdo.

## Revisão do usuário antes da publicação

- Substituída a comunicação com stakeholders em inglês pelo trabalho em sistemas de onboarding das Apple Developer Academies, em contexto transnacional, conforme informação fornecida pelo usuário. Ajuste aplicado em resumo, bio e experiência nos dois idiomas e regenerados os quatro currículos.

## Endereço de produção

- Usuário escolheu tentar lferreira. Cloudflare confirmou o endereço exato `https://lferreira.pages.dev`, sem sufixos, e a publicação foi concluída.
- Build de produção gerado com NEXT_PUBLIC_SITE_URL=https://lferreira.pages.dev.
- Repositório público: https://github.com/lgabrielf/ferreira.
- Publicação inicial por CLI. Integração automática por push permanece pendente; nenhum segredo OAuth temporário foi adicionado ao GitHub.
