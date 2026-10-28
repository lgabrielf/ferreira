# Identidade visual

## Tese
Editorial e preciso, com conexões discretas que traduzem o trabalho de backend de Lucas em uma leitura humana e direta.

## Direções consideradas
1. Terminal e infraestrutura: tipografia monoespaçada, superfícies escuras e convenções de código. Rejeitada por aproximar o portfólio de um painel técnico e reduzir a leitura das experiências.
2. Editorial e matéria: fundo de papel, tipografia ampla, linhas finas e ferrugem como acento. Escolhida por apresentar informação técnica com clareza e fazer uma associação sutil entre Ferreira e metal, sem transformar o sobrenome em um slogan.

## Paleta
| Token | Claro | Escuro | Uso |
| --- | --- | --- | --- |
| bg | #f5f3ed | #1b211e | Fundo |
| surface | #ebe8df | #252d28 | Sobre e formação |
| ink | #252622 | #f0eee5 | Texto principal |
| muted | #66665e | #babdb1 | Texto secundário |
| line | #d4d1c6 | #424d44 | Divisores decorativos |
| accent | #9b4227 | #eda17d | Links, títulos e foco |
| on-accent | #fffaf5 | #24251f | Texto em botões |
| active | #46634a | #adc8a5 | Disponibilidade |

Texto principal, secundário e botões devem cumprir WCAG AA. As bordas de baixa intensidade são decorativas e não carregam informação isoladamente. Disponibilidade e links têm rótulos textuais.

## Tipografia
Manrope para navegação, corpo e títulos profissionais. Newsreader para grandes títulos editoriais e monograma. Ambas são carregadas via next/font pelo layout. A escala visual usa 10, 12, 14, 17, 23, 42, 58 e 110 px; títulos principais se adaptam à tela por clamp e media queries. Currículos têm identidade própria de documento ATS, sem depender desta escala.

## Grid e detalhes
Container máximo de 1328 px, expandido a 1400 px em telas grandes. Margens internas de 64 ou 80 px em desktop, 24 px em mobile e 18 px a 320 px. Espaçamento orientado por múltiplos de 4 e 8, com ajustes tipográficos. Grid editorial de 1:2 para experiência e ferramentas. Bordas de 1 px, sem sombras de cartões. Botões retangulares e foco destacado; listas de ferramentas têm contornos simples.

## Assinatura
Um diagrama abstrato de conexões hub-spoke acompanha o hero. É decorativo, sem representar topologia real ou telemetria do cliente. Três rótulos descrevem áreas de trabalho já documentadas. O monograma lf. usa o ponto em ferrugem. O retrato existente aparece em tamanho moderado na seção Sobre para respeitar sua resolução.

## Movimento
Transições de 150 a 180 ms somente em links e botões; hover desloca botões 2 px. Rolagem suave entre seções. Sem dependências de animação e sem entrada que esconda conteúdo. prefers-reduced-motion desativa as transições e a rolagem suave.

## Conteúdo e idiomas
PT-BR em primeira pessoa, com ações concretas e nomes de ferramentas; inglês natural e técnico. Experiências ficam completas, com ênfase no LABCOMU e no trabalho de sincronização, arquitetura e observabilidade. Sem percentuais ambíguos, projetos inventados, telefone ou menção à Suíça. A troca de idioma preserva o fragmento atual e a escolha em cookie/localStorage. Todo texto de interface está em content/ui.ts; informações profissionais vêm de content/profile.json.
