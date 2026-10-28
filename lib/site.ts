export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/,'');
export const locales = ['pt','en'] as const;
export type Locale = typeof locales[number];
export function isLocale(value:string):value is Locale{return value==='pt'||value==='en';}
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}})()`;
