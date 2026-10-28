# Análise dos currículos

Estado: auditoria inicial preservada, com resoluções da Fase 0 registradas na seção final. Data: 27/10/2026.

## Fontes e identificação das versões

- `assets/source/Lucas_Ferreira_CV.pdf`: uma página, em inglês, com resumo profissional, competências agrupadas e foco em backend e oportunidades na Suíça. Contém foto, conforme inspeção visual. É a candidata a versão B, flexível, adaptada a oportunidades na Suíça. Esta identificação é uma dedução, não um fato confirmado pelo autor.
- `assets/source/vittae_ENG.pdf`: duas páginas, em inglês, sem foto conforme inspeção visual, com mais detalhes de atividades e lista ampla de tecnologias. É a candidata a versão A, otimizada para ATS. Esta identificação também é uma dedução.

Ambos contêm texto extraível. A análise abaixo usa a extração completa, sem assumir que a data de modificação dos arquivos representa a atualização dos fatos. O prompt anexado à conversa é mais completo e prevalece sobre `prompt-codex-portfolio.md` encontrado na pasta pessoal.

## Informações em comum

- Nome: Lucas Gabriel Ferreira. Localidade: Natal, Brasil. E-mail: lucasfeg7@gmail.com.
- IMD/LABCOMU: desenvolvedor backend, dezembro de 2023 até o presente; APIs REST com PHP/Slim; qualidade em cinco projetos; PHPStan nível 8, SonarQube, Elasticsearch, Prometheus e MariaDB; trabalho remoto.
- Geowellex: desenvolvedor full stack, maio de 2023 até o presente; FastAPI, PLCs, MQTT e WebSocket; aplicações PHP/Symfony/Laravel; relatórios com Electron, Highcharts e TypeScript.
- DB2: desenvolvedor full stack desde abril de 2024; Django/Django REST, Sienge, AWS ECS/ECR, Docker e React. O término diverge.
- SESAP/CTEC: desenvolvedor full stack, janeiro de 2023 a julho de 2024; sistemas hospitalares, logística, estoque, contratos e nutrição; React, FastAPI, Flask, SQLAlchemy, PostgreSQL e contêineres.
- Linuslog: desenvolvedor full stack, agosto de 2021 a dezembro de 2022; ERP, FastAPI, MySQL, React, TypeScript e administração de servidores Windows/Linux.
- Experiências de suporte em STI/UFRN e BTN Solutions; a versão compacta reúne os dois vínculos.
- Bacharelado em Ciência e Tecnologia com ênfase em computação pela UFRN, concluído em 2024; Engenharia de Computação na UFRN iniciada em 2024 e descrita como em andamento.

## Divergências que exigem decisão explícita

| Item | Currículo compacto | Currículo detalhado | Tratamento proposto |
| --- | --- | --- | --- |
| Término na DB2 | Abril de 2026 | Dezembro de 2025 | Perguntar. Sem resposta, adotar abril de 2026 provisoriamente por ser o término mais recente informado e registrar a pendência. Não há prova de qual arquivo foi atualizado por último. |
| Local/modelo na DB2 | Remoto, São Paulo, Brasil | Natal, RN | Perguntar se São Paulo é a sede e Natal o local de trabalho. Não apresentar uma interpretação como confirmada. |
| SESAP: responsabilidade | Contribuiu para modernizar processos | Liderou a modernização | Evitar afirmar liderança sem esclarecimento; descrever os sistemas construídos e os processos atendidos. |
| Suporte: vínculos e datas | STI/UFRN e BTN agrupados em 2021-2022 | STI/UFRN: set-dez/2021; BTN: ago/2021-dez/2022 | Preferir registros separados e datas específicas; isso não altera as datas do material de origem. |
| Inglês | Avançado, autoavaliação B2 | Não especificado | Preservar B2 autodeclarado; evitar traduzir B2 como fluência ou certificação. |

## Informações exclusivas

### Currículo compacto

- Título Backend Software Engineer e declaração de mais de cinco anos de experiência.
- Cidadania brasileira e abertura para mudança à Suíça.
- Apple como cliente e colaboração direta em inglês com seus interlocutores.
- Participação em preparação de releases iOS: Xcode, assinatura, provisionamento, configuração de exportação e TestFlight.
- Redis, PHPUnit, Bitbucket Pipelines e xcodebuild na lista de competências.
- Português nativo; inglês B2 autodeclarado; alemão ainda não falado, com disposição para aprender.

### Currículo detalhado

- Cobertura de testes unitários de 80% no contexto dos cinco projetos backend. O texto não esclarece se o valor é meta, média ou resultado de cada projeto. Não transformar isso em aumento percentual ou em autoria exclusiva.
- Drilling Box, configuração Mikrotik, monitoramento litológico e frontend AngularJS na Geowellex.
- Exportação personalizável de PDF com Electron, Highcharts e TypeScript.
- Nutrição parenteral, Portainer, Power BI, Selenium e serviços Windows na SESAP/CTEC.
- SQLAlchemy, AngularJS e Debian na experiência Linuslog.
- SIGAA, triagem de problemas e relatórios de bugs/vulnerabilidades na STI/UFRN.
- Firebird, recuperação de bancos, VACUUM, índices, otimização, virtualização e manutenção de hardware na BTN.
- Mês de conclusão do bacharelado e início da Engenharia de Computação: dezembro de 2024.
- Node, Vue e Next na lista ampla de tecnologias, além de conceitos como orientação a objetos, padrões de projeto e arquitetura de APIs. O currículo não associa todas essas tecnologias a entregas específicas nem informa proficiência.
- Links GitHub e LinkedIn, confirmados nas anotações do PDF: https://github.com/lgabrielf e https://www.linkedin.com/in/lucasgbferreira/.

## Lacunas e cuidados de publicação

- Confirmar se IMD/LABCOMU e Geowellex continuam atuais e se a graduação permanece em andamento em outubro de 2026.
- Não há disponibilidade geral explícita para vagas ou freelance. A disposição para mudança à Suíça não equivale a uma declaração geral de disponibilidade.
- Não há certificações, cursos adicionais nem projetos pessoais documentados nos textos extraídos. Há uma foto no currículo compacto, identificada na inspeção visual; decidir se sua resolução é suficiente para uso no site.
- Não há métricas de receita, redução de custos, latência, usuários ou produtividade. Não criar números para preencher essa lacuna.
- Os dois documentos incluem telefone. Conforme a instrução do usuário, omiti-lo dos novos currículos públicos e do site sem confirmação explícita. Não publicar endereço residencial.
- Confirmar e-mail público e eventuais restrições à menção de cliente ou detalhes de trabalho. A existência de Apple no CV permite identificá-la como fonte; não comprova por si só autorização organizacional para divulgar detalhes adicionais.
- Sobreposições entre empregos aparecem nas duas fontes. Preservar as datas; não inferir dedicação exclusiva, carga horária, regime CLT ou natureza dos contratos.

## Pontos fracos e revisão recomendada

- Trocar construções nominais como “Definition and implementation” por verbos de ação com contexto.
- Remover “Acting in a transnational company”, que não descreve uma entrega e deixa incerta a relação entre laboratório, empregador e cliente.
- Evitar expressões vagas como “large companies” e “modernization and innovation”; citar o setor e os processos efetivamente atendidos.
- Na DB2, uniformizar verbos no passado se o vínculo terminou; o currículo compacto mistura “Developed”, “Managed” e “Support”.
- Consolidar os dois tópicos semelhantes de release iOS do currículo compacto, sem elevar contribuição a responsabilidade integral.
- Não publicar nível de proficiência para cada ferramenta: as fontes não o fornecem.
- Preferir “English: B2, self-assessed” a “Advanced (B2)”, evitando ambiguidade de classificação.
- A alegação de mais de cinco anos é compatível com início em agosto de 2021 e a data desta auditoria, mas deve ser calculada por tempo decorrido, nunca somando vínculos simultâneos.
- Manter no máximo duas páginas, coluna única e texto extraível. A versão detalhada tem uma quebra que separa atividades da BTN e apresenta o número de página no meio da extração. Os novos documentos devem ser verificados por renderização e ordem de leitura.

## Direção de consolidação proposta

Usar a organização e o posicionamento backend do currículo compacto e recuperar os detalhes concretos da versão extensa. Manter todas as experiências na fonte estruturada; condensar as mais antigas no PDF quando necessário, preservando empresas e datas. Gerar PT-BR e inglês a partir da mesma fonte. Não publicar os PDFs originais nem suas cópias no repositório público. Datas contraditórias e atualizações de status permanecem pendentes até a resposta da Fase 0; as escolhas acima ainda não são validações do usuário.

## Perguntas essenciais para a rodada única

1. A DB2 terminou em dezembro de 2025 ou abril de 2026? O vínculo era remoto a partir de Natal, com empresa sediada em São Paulo?
2. IMD/LABCOMU e Geowellex continuam atuais? Engenharia de Computação segue em andamento?
3. Qual disponibilidade deve aparecer e a mudança para a Suíça ainda é um objetivo público?
4. O e-mail do CV pode ser público e existe algo a omitir, especialmente a referência à Apple? Telefone fica omitido por padrão.
5. Há projetos, links adicionais, preferências visuais ou domínio próprio a acrescentar? Adotar PT-BR padrão e domínio Vercel na ausência de resposta; usar a foto existente somente se tiver qualidade suficiente, com monograma como alternativa.

O escopo dos 80% e a liderança na SESAP podem ser esclarecidos na mesma rodada, mas há alternativa segura: omitir a métrica ambígua e descrever as entregas sem atribuir liderança.

## Consolidação após respostas da Fase 0

As decisões abaixo substituem as propostas e perguntas pendentes da auditoria inicial.

- **DB2:** encerramento em abril de 2026, confirmado pelo usuário. A versão de dezembro de 2025 havia sido ajustada para uma vaga. O usuário não esclareceu a divergência de cidade/modelo; o conteúdo público usa apenas Brasil.
- **Atuação atual:** IMD/LABCOMU e Geowellex permanecem ativos. Engenharia de Computação segue em andamento.
- **Posicionamento:** Lucas Gabriel Ferreira, Engenharia de Software Backend. Disponível para vagas e projetos freelance.
- **Suíça:** removida. Era uma adaptação para uma oportunidade específica, não objetivo público. A referência a alemão também foi omitida por não representar um idioma falado.
- **Idiomas:** português nativo e inglês B2, autoavaliado. Não se afirma certificação, fluência nem nível avançado.
- **Apple:** o usuário autorizou a menção como cliente dos projetos do IMD/LABCOMU. O vínculo profissional continua atribuído ao laboratório; não se apresenta emprego direto na Apple.
- **Escopo técnico do LABCOMU:** incluídos auditoria de logs, busca com Elasticsearch, coleta de métricas com Prometheus, processos de sincronização e arquitetura hub-spoke, informados pelo usuário nesta conversa. As frases descrevem o trabalho, sem atribuir redução de latência, ganhos financeiros ou volumes não documentados.
- **Cobertura de testes:** o percentual de 80% não foi usado como destaque porque seu escopo permanece ambíguo. Mantidos os fatos documentados sobre cinco projetos, testes automatizados, PHPStan nível 8 e SonarQube.
- **SESAP:** descritas entregas concretas sem a alegação de liderança, que era inconsistente entre versões.
- **Contatos:** e-mail, GitHub e LinkedIn autorizados para publicação. Telefone e endereço residencial excluídos de todos os novos currículos.
- **Foto:** permitida no site; os currículos ATS não contêm foto.
- **Seções sem dados:** não há certificações nem projetos pessoais detalhados fornecidos. Não foram criados títulos vazios, credenciais ou resultados fictícios.

## Fonte e exportação

`content/profile.json` é a fonte estruturada PT/EN que alimenta o site e os currículos. `scripts/generate-cv.py` gera os dois PDFs em `public/cv/` e as versões editáveis em `cvs/` a partir desse arquivo. Os originais permanecem em `assets/source/`, excluídos da publicação.

Os currículos usam coluna única, corpo de 10,5 pt, títulos padrão e até duas páginas. A primeira página concentra resumo e os três vínculos mais recentes. A segunda reúne histórico anterior, formação, habilidades agrupadas e idiomas. Nenhum currículo contém foto, tabela, caixa de texto ou indicador gráfico de proficiência.

## Verificação dos arquivos gerados

- PDFs PT e EN: duas páginas cada; todas as páginas renderizadas e inspecionadas visualmente, sem cortes, sobreposições ou quebras de experiência entre páginas.
- Texto extraído conferido contra todos os blocos do JSON na ordem esperada: nome, título, contatos, resumo, experiências, formação, habilidades e idiomas. Sem tabelas ou colunas que alterem a leitura.
- DOCX PT e EN: renderizados pelo LibreOffice incluído no runtime do Codex; duas páginas em cada idioma, todas inspecionadas após a revisão final. Removida uma borda herdada do estilo de título para manter o layout simples.
- Telefone, Suíça, alemão e o percentual ambíguo de 80% não aparecem nos documentos publicados. A revisão não usa certificações nem resultados não fornecidos.
- As bios do site foram redigidas com base nos materiais e nas respostas e ficam disponíveis para revisão editorial do usuário.
