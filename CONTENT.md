# Como atualizar o portfólio

## Textos profissionais

Abra `content/profile.json`. Os campos iniciais contêm nome, localização, e-mail e redes. Dentro de `pt` estão os textos em português; dentro de `en`, os equivalentes em inglês. Atualize os dois idiomas juntos.

- `summary`: apresentação curta, usada também nos metadados.
- `bio`: texto da seção Sobre.
- `availability`: disponibilidade profissional.
- `experience`: experiências. Cada item contém empresa, cargo, período, local e lista de entregas em `bullets`.
- `education`: formação.
- `skills`: ferramentas agrupadas.
- `languages`: idiomas e níveis.

Mantenha aspas, vírgulas e colchetes no formato JSON. Não adicione números ou resultados que não possa confirmar. As sobreposições de vínculos são intencionais e refletem os currículos.

## Rótulos, foto e aparência

`content/ui.ts` contém botões, navegação e outros textos de interface. A foto é `public/portrait.webp`. Os tokens no início de `app/globals.css` controlam cores, espaçamento e temas. Consulte DESIGN.md antes de alterar a identidade.

## Currículos

Edite primeiro `content/profile.json`, depois execute `scripts/generate-cv.py` com Python e as dependências descritas no script. Isso atualiza os dois PDFs e DOCX a partir dos mesmos dados. Os botões do site usam os PDFs em `public/cv/`, com nomes estáveis. Abra os PDFs e confira todas as páginas antes de publicar. Alterar somente um DOCX não atualiza automaticamente o site: incorpore qualquer mudança permanente ao JSON.

## Publicação

Execute lint, tipos e build conforme README.md. Faça commit e push no repositório conectado à hospedagem. Nunca adicione `assets/source/` ao Git: os arquivos originais contêm telefone e dados que não fazem parte do material público.
