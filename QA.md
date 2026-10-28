# Verificação local

Data: 27 de outubro de 2026, horário de Fortaleza.

## Aprovado

- Build de produção Next.js 16.4.3 com export estático.
- TypeScript sem erros e ESLint sem erros ou avisos.
- `/pt/` e `/en/`: HTTP 200; `html lang` pt-BR/en e um H1 por página.
- Ambos os PDFs: HTTP 200 e assinatura PDF válida.
- robots, sitemap, retrato e imagens sociais: HTTP 200.
- Ausência de telefone, Suíça e percentual ambíguo de 80% no HTML público.
- Navegação PT/EN preserva hash da seção; `html lang` e metadados atualizam.
- Tema escolhido persiste durante navegação e recarga. A raiz respeita o idioma salvo.
- Nenhum erro ou aviso no console durante a verificação da navegação.
- Sem overflow horizontal medido em 320, 390, 768 e 1920 px.
- Inspeção visual em mobile e desktop, claro e escuro. Fotos e blocos de texto sem sobreposição nas vistas inspecionadas.
- PDF e DOCX PT/EN: duas páginas cada, coluna única, corpo 10,5 pt. Todas as páginas renderizadas e inspecionadas. Texto dos PDFs extraído e comparado com blocos do JSON na ordem esperada.

## Corrigido durante QA

- Persistência de tema na troca de idioma: reaplicação após navegação.
- Preservação da seção: deslocamento para a âncora após atualizar o idioma.
- Unificação da chave locale entre cookie, localStorage e redirecionamento.
- Textos genéricos de apresentação e contato substituídos por linguagem específica.
- Avisos/erros de lint corrigidos.

## Limitações e verificações pendentes

- Lighthouse 13.6.0 instalado, mas não produziu relatórios: Chrome instalado e Chrome for Testing 156 falharam ao iniciar na sandbox macOS. Erro observado: `bootstrap_check_in ... MachPortRendezvousServer ... Permission denied (1100)`. Não há notas válidas, portanto o alvo >=95 ainda não foi demonstrado.
- Não há auditoria automatizada completa WCAG AA. Tokens e elementos seguem os critérios previstos, mas inspeção visual e código não substituem uma auditoria completa.
- URLs canonical/sitemap usam localhost neste build de revisão. Devem ser regeneradas com NEXT_PUBLIC_SITE_URL real antes da publicação.
- Nenhum deploy em produção, teste de DNS, ligação Git ou validação do cabeçalho Accept-Language em produção foi concluído: dependem de autenticação.
