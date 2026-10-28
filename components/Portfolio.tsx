import Image from 'next/image';
import profile from '../content/profile';
import {ui, type Language} from '../content/ui';
import Controls from './Controls';

function Arrow({down = false}: {down?: boolean}) {
  return <svg className={down ? 'arrow down' : 'arrow'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>;
}
function SkillIcon({index}: {index: number}) {
  const paths = ['M4 6h5v5H4zM15 13h5v5h-5zM9 8h8v5M6 11v5h9', 'M4 6c0-4 16-4 16 0v12c0 4-16 4-16 0V6Zm0 0c0 4 16 4 16 0M4 12c0 4 16 4 16 0', 'M3 4h18v6H3zM3 14h18v6H3zM6 7h2M6 17h2', 'M4 16v4h16v-4M12 16V3m-5 5 5-5 5 5'];
  return <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d={paths[index]}/></svg>;
}
function Network({labels}: {labels: string[]}) {
  return <div className="network" aria-hidden="true">
    <svg viewBox="0 0 410 230" fill="none"><path className="network-line" d="M35 115H170M200 115H370M200 115V35H320M200 115V195H320"/><circle className="network-ring" cx="185" cy="115" r="26"/><circle className="network-node" cx="185" cy="115" r="5"/><circle className="network-dot" cx="35" cy="115" r="4"/><circle className="network-dot" cx="320" cy="35" r="4"/><circle className="network-dot" cx="370" cy="115" r="4"/><circle className="network-dot" cx="320" cy="195" r="4"/></svg>
    <span className="network-label first">{labels[0]}</span><span className="network-label second">{labels[1]}</span><span className="network-label third">{labels[2]}</span>
  </div>;
}
export default function Portfolio({lang}: {lang: Language}) {
  const p = profile[lang];
  const t = ui[lang];
  const cv = `/cv/Lucas-Gabriel-Ferreira-CV-${lang}.pdf`;
  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="site-header" id="top">
      <a className="brand" href={`/${lang}/`} aria-label={profile.name}><span className="monogram">lf<span>.</span></span><span className="brand-name">{profile.name}</span></a>
      <nav aria-label={t.navigation}><a href="#experience">{t.experience}</a><a href="#about">{t.about}</a><a href="#contact">{t.contact}</a></nav>
      <Controls lang={lang}/>
    </header>
    <main id="main">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-topline"><p className="eyebrow">{t.eyebrow}</p><p className="location">{t.location}<span aria-hidden="true"> ↗</span></p></div>
        <div className="hero-grid">
          <div className="hero-copy"><h1 id="hero-title">{t.heroLead}<br/><em>{t.heroAccent}</em></h1><p className="hero-description">{t.heroText}</p><div className="hero-actions"><a className="button primary" href={cv} download>{t.download}<Arrow down/></a><a className="text-link" href="#contact">{t.contactCta}<Arrow/></a></div></div>
          <aside className="hero-aside"><p className="availability"><span aria-hidden="true"/>{p.availability}</p><Network labels={t.diagram}/><div className="hero-specialty"><span className="small-rule"/><p>{t.signal}</p><span className="small-rule"/></div></aside>
        </div>
        <div className="hero-bottom"><a href="#experience">{t.scroll}<span aria-hidden="true">↓</span></a><p>{p.title}</p></div>
      </section>
      <section className="experience-section section-shell" id="experience" aria-labelledby="experience-title">
        <div className="section-heading"><p className="eyebrow section-number"><span>01</span>{t.experience}</p><div><h2 id="experience-title">{t.experienceTitle}</h2><p className="section-description">{t.experienceIntro}</p></div></div>
        <div className="experience-list">{p.experience.map((job, i) => <article className={`experience-row ${i === 0 ? 'featured-experience' : ''}`} key={job.id}>
          <div className="experience-meta"><p className="job-period">{job.period}</p><p className="job-location">{job.location}</p>{i < 2 && <span className="current-role">{t.current}</span>}</div>
          <div className="experience-content"><div className="job-heading"><h3>{job.company}</h3><span className="job-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span></div><p className="job-role">{job.role}</p><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div>
        </article>)}</div>
      </section>
      <section className="about-section section-shell" id="about" aria-labelledby="about-title">
        <p className="eyebrow section-number"><span>02</span>{t.about}</p>
        <div className="about-grid"><div className="portrait-column"><div className="portrait-frame"><Image src="/portrait.webp" alt={t.portraitAlt} width={347} height={416} sizes="(max-width: 680px) 240px, 320px" className="portrait"/><span className="portrait-mark" aria-hidden="true">lf.</span></div><p className="portrait-caption">{t.location}<span>{t.portraitTools}</span></p></div>
          <div className="about-copy"><h2 id="about-title">{t.aboutTitle}</h2><p className="bio">{p.bio}</p><div className="language-list"><h3>{t.languages}</h3>{p.languages.map(language => <p key={language}>{language}</p>)}</div></div></div>
        <div className="education-grid"><h3>{t.education}</h3><div>{p.education.map(item => <article className="education-item" key={item.degree}><p className="education-period">{item.period}</p><h4>{item.degree}</h4><p>{item.institution}</p></article>)}</div></div>
      </section>
      <section className="skills-section section-shell" aria-labelledby="skills-title"><div className="section-heading"><p className="eyebrow section-number"><span>03</span>{t.signal}</p><div><h2 id="skills-title">{t.skillsTitle}</h2><p className="section-description">{t.skillsIntro}</p></div></div><div className="skill-groups">{p.skills.map((group,i) => <div className="skill-group" key={group.category}><h3><SkillIcon index={i}/>{group.category}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title"><p className="eyebrow section-number"><span>04</span>{t.contact}</p><div className="contact-grid"><h2 id="contact-title">{t.contactTitle}</h2><div><p>{t.contactText}</p><a className="button primary" href={`mailto:${profile.email}`}>{t.contactCta}<Arrow/></a></div></div><a className="email-link" href={`mailto:${profile.email}`} aria-label={`${t.email}: ${profile.email}`}>{profile.email}<Arrow/></a><div className="contact-links"><a href={profile.github}>{t.github}<Arrow/></a><a href={profile.linkedin}>{t.linkedin}<Arrow/></a><a href={cv} download>{t.download}<Arrow down/></a></div></section>
    </main>
    <footer className="site-footer"><a className="monogram" href="#top" aria-label={t.backTop}>lf<span>.</span></a><p>{t.footer}</p><a href="#top">{t.backTop}<span aria-hidden="true">↑</span></a></footer>
  </>;
}
