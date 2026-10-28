'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ui, type Language } from '../content/ui';

export default function Controls({lang}: {lang: Language}) {
  const router = useRouter();
  const t = ui[lang];
  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem('theme'); } catch {}
      root.dataset.theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    };
    applyTheme();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', applyTheme);
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      target?.scrollIntoView({behavior:'instant'});
    }
    return () => media.removeEventListener('change', applyTheme);
  }, [lang]);
  function toggleTheme() {
    const root = document.documentElement;
    const dark = root.dataset.theme === 'dark' || (!root.dataset.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch {}
  }
  function changeLanguage(event: React.MouseEvent<HTMLAnchorElement>, next: Language) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    try { localStorage.setItem('locale', next); } catch {}
    // Persist the visitor’s explicit preference in the browser cookie store.
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `locale=${next}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(`/${next}/${window.location.hash}`, {scroll:false});
  }
  return <div className="controls">
    <div className="language-control" role="group" aria-label={t.language}>
      {(['pt','en'] as const).map(code => <Link href={`/${code}/`} key={code} lang={code === 'pt' ? 'pt-BR' : 'en'} aria-label={t.languageNames[code]} aria-current={lang === code ? 'page' : undefined} onClick={event => changeLanguage(event, code)}>{code.toUpperCase()}</Link>)}
    </div>
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={t.theme} title={t.theme}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
    </button>
  </div>;
}
