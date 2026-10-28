# Hospedagem e endereço gratuitos

Verificação: 27/10/2026. Pesquisa somente de leitura; nenhum registro, PR, plano, instalação ou deploy foi realizado nesta etapa.

## Recomendação

Usar **Cloudflare Pages Free com um endereço `pages.dev`** para o portfólio estático. A oferta oficial permite começar gratuitamente sem cartão; não se trata de trial. O endereço é um subdomínio do provedor, não um domínio próprio comprado. A oferta e os termos podem mudar; não existe promessa de gratuidade ou disponibilidade perpétua. [Produto oficial](https://www.cloudflare.com/products/pages/)

Sugestão principal: **`ferreira-api.pages.dev`**, associando diretamente sobrenome e especialidade. Alternativa com jogo de palavras: **`ferreiroute.pages.dev`**, combinando Ferreira e route, uma referência a rotas de API. Alternativa mais clara: **`lucasferreira.pages.dev`**. Estes são candidatos, não endereços reservados ou com disponibilidade confirmada. Na criação, o Cloudflare pode acrescentar caracteres se o nome estiver ocupado. [Formato dos endereços](https://developers.cloudflare.com/pages/get-started/direct-upload/)

## Comparação

| Opção | Gratuito sem trial | Ajuste ao caso |
| --- | --- | --- |
| Cloudflare Pages Free + `pages.dev` | Sim, dentro das cotas | Recomendação para portfólio estático que informa disponibilidade freelance. As páginas de produto e cotas consultadas não impõem a restrição pessoal/não comercial da Vercel Hobby. Esta conclusão é uma leitura da oferta, não uma garantia contratual de aceitação de qualquer conteúdo. |
| Vercel Hobby + `vercel.app` | Sim, dentro das cotas | Restrito a uso pessoal não comercial. A política inclui publicidade de venda de serviços na definição comercial; por isso não recomendar para um site voltado a captar freelance. |
| `is-a.dev` + hospedagem separada | Subdomínio gratuito; não hospeda o site | Adequado a portfólios pessoais de desenvolvimento, porém a referência a freelance exige cuidado com a proibição de finalidade comercial. Não assumir aprovação. |

A [política de uso da Vercel](https://vercel.com/docs/limits/fair-use-guidelines) restringe Hobby a uso pessoal não comercial; o [plano Hobby](https://vercel.com/docs/plans/hobby) confirma gratuidade e limites, distinguindo-o do trial Pro. Não selecionar Pro nem fornecer cartão para esta tarefa.

## Cloudflare Pages: limites e implementação

O Free oferece 500 builds/mês, um build por vez, até 20.000 arquivos por site e 25 MiB por arquivo. Arquivos estáticos são adequados ao portfólio e aos PDFs. Functions usam cotas de Workers separadas; não são necessárias para servir o conteúdo estático. [Limites oficiais](https://developers.cloudflare.com/pages/platform/limits/)

Para manter deploy automático a cada push, criar o projeto desde o início com integração Git. Um projeto criado por Direct Upload não pode depois ser convertido diretamente para integração Git: seria necessário criar outro projeto. [Documentação oficial](https://developers.cloudflare.com/pages/get-started/direct-upload/)

A exportação estática do Next.js serve neste cenário. Recursos que dependem de processamento no servidor, como redirecionamento por `Accept-Language`, precisam ser adaptados ou tratados separadamente; não afirmar suporte só por hospedar o diretório exportado. O seletor manual de idiomas e rotas estáticas `/pt` e `/en` permanecem viáveis.

## is-a.dev: elegibilidade

O guia inclui portfólios pessoais ligados a desenvolvimento, mas também exige ausência de finalidade comercial. Os termos de 31/08/2026 proíbem fins comerciais ou lucrativos, permitem recusa de pedidos e não garantem permanência. Uma menção a disponibilidade freelance, mesmo sem loja ou pagamento, não tem exceção explícita nos documentos consultados. Portanto, elegibilidade não confirmada; não usar a ausência de checkout como prova de permissão. [Guia](https://docs.is-a.dev/quickstart/), [termos oficiais](https://github.com/is-a-dev/register/blob/main/TERMS_OF_SERVICE.md)

Os mesmos termos permitem sites criados com IA, mas rejeitam o uso de IA na criação dos PRs de registro. Nenhum PR foi preparado ou enviado. A aprovação depende dos mantenedores; o serviço fornece o subdomínio, e Cloudflare Pages pode fornecer a hospedagem. [Termos](https://github.com/is-a-dev/register/blob/main/TERMS_OF_SERVICE.md), [plataformas suportadas](https://docs.is-a.dev/faq/)

## Consulta dos quatro nomes solicitados

| Candidato | Caminho consultado no registro oficial | Resultado |
| --- | --- | --- |
| `ferreira.is-a.dev` | [domains/ferreira.json](https://github.com/is-a-dev/register/blob/main/domains/ferreira.json) | Não confirmado |
| `ferreira-api.is-a.dev` | [domains/ferreira-api.json](https://github.com/is-a-dev/register/blob/main/domains/ferreira-api.json) | Não confirmado |
| `ferreiradev.is-a.dev` | [domains/ferreiradev.json](https://github.com/is-a-dev/register/blob/main/domains/ferreiradev.json) | Não confirmado |
| `lucasferreira.is-a.dev` | [domains/lucasferreira.json](https://github.com/is-a-dev/register/blob/main/domains/lucasferreira.json) | Não confirmado |

Limitação técnica: a ferramenta web retornou `Cache miss` nos quatro arquivos, tanto no GitHub quanto no conteúdo raw. A API por shell não resolveu DNS neste ambiente. Isso não é uma resposta 404 e não comprova que os nomes estão livres. O diretório oficial foi acessível, mas a visualização fornecida não permitiu confirmar os quatro nomes. Nenhuma disponibilidade foi inferida pela ausência em resultados de busca. Mesmo um arquivo ausente exigiria rever pedidos pendentes e restrições antes de anunciar disponibilidade. [Registro oficial](https://github.com/is-a-dev/register/tree/main/domains)

## Decisão sugerida

Priorizar `ferreira-api.pages.dev` em Cloudflare Pages Free, sujeito à disponibilidade na criação. Manter `ferreiroute.pages.dev` como alternativa mais autoral e `lucasferreira.pages.dev` como alternativa literal. Evitar depender de is-a.dev para concluir o deploy: adicionaria revisão manual e dúvida de elegibilidade sem reduzir o custo abaixo de zero.
