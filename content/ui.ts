export type Language = 'pt' | 'en';
type InterfaceCopy = {
  brand: string; github: string; linkedin: string; portraitTools: string;
  skip: string; navigation: string; experience: string; about: string; contact: string;
  theme: string; language: string; languageNames: {pt: string; en: string};
  eyebrow: string; heroLead: string; heroAccent: string; heroText: string;
  download: string; contactCta: string; scroll: string; location: string;
  signal: string; diagram: string[]; experienceIntro: string; experienceTitle: string;
  current: string; earlier: string; aboutTitle: string; education: string; languages: string;
  skillsTitle: string; skillsIntro: string; contactTitle: string; contactText: string;
  portraitAlt: string; email: string; backTop: string; footer: string;
};
export const ui = {
  pt: {
    brand: 'Lucas Ferreira', github: 'GitHub', linkedin: 'LinkedIn', portraitTools: 'PHP / Python',
    skip: 'Pular para o conteúdo', navigation: 'Navegação principal', experience: 'Experiência', about: 'Sobre', contact: 'Contato',
    theme: 'Alternar entre tema claro e escuro', language: 'Selecionar idioma', languageNames: {pt:'Português', en:'English'},
    eyebrow: 'Lucas Gabriel Ferreira · Engenharia de Software', heroLead: 'Por trás', heroAccent: 'do sistema.',
    heroText: 'Desenvolvo APIs em PHP e Python, sincronização de dados e observabilidade para sistemas corporativos e industriais.',
    download: 'Baixar currículo', contactCta: 'Vamos conversar', scroll: 'Conheça meu trabalho', location: 'Natal, Brasil',
    signal: 'Backend · PHP & Python', diagram: ['APIs', 'Sincronização', 'Observabilidade'],
    experienceIntro: 'Da operação à arquitetura', experienceTitle: 'Experiência que\nconecta sistemas.',
    current: 'Atuação atual', earlier: 'Experiências anteriores', aboutTitle: 'Lucas Gabriel\nFerreira.',
    education: 'Formação', languages: 'Idiomas', skillsTitle: 'Ferramentas,\ncom contexto.',
    skillsIntro: 'Tecnologias que uso para desenvolver, integrar e acompanhar sistemas em produção.',
    contactTitle: 'Vamos falar\nde backend.',
    contactText: 'Disponível para vagas em engenharia de software e projetos freelance. Conte o que você está construindo.',
    portraitAlt: 'Retrato de Lucas Gabriel Ferreira', email: 'Enviar e-mail', backTop: 'Voltar ao topo', footer: 'Lucas Gabriel Ferreira · Engenharia de Software Backend'
  },
  en: {
    brand: 'Lucas Ferreira', github: 'GitHub', linkedin: 'LinkedIn', portraitTools: 'PHP / Python',
    skip: 'Skip to content', navigation: 'Main navigation', experience: 'Experience', about: 'About', contact: 'Contact',
    theme: 'Switch between light and dark theme', language: 'Select language', languageNames: {pt:'Português', en:'English'},
    eyebrow: 'Lucas Gabriel Ferreira · Software Engineering', heroLead: 'Behind', heroAccent: 'the system.',
    heroText: 'I build PHP and Python APIs, data synchronization and observability for enterprise and industrial systems.',
    download: 'Download résumé', contactCta: 'Let’s talk', scroll: 'Explore my work', location: 'Natal, Brazil',
    signal: 'Backend · PHP & Python', diagram: ['APIs', 'Synchronization', 'Observability'],
    experienceIntro: 'From operations to architecture', experienceTitle: 'Experience that\nconnects systems.',
    current: 'Current roles', earlier: 'Previous experience', aboutTitle: 'Lucas Gabriel\nFerreira.',
    education: 'Education', languages: 'Languages', skillsTitle: 'Tools,\nin context.',
    skillsIntro: 'Technologies I use to build, integrate and monitor production systems.',
    contactTitle: 'Let’s talk\nbackend.',
    contactText: 'Open to software engineering roles and freelance projects. Tell me what you are building.',
    portraitAlt: 'Portrait of Lucas Gabriel Ferreira', email: 'Send an email', backTop: 'Back to top', footer: 'Lucas Gabriel Ferreira · Backend Software Engineering'
  }
} satisfies Record<Language, InterfaceCopy>;
