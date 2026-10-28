import '../globals.css';
import {sans,serif} from '@/lib/fonts';
import {isLocale,locales,themeScript} from '@/lib/site';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return locales.map(lang=>({lang}));}
export const dynamicParams = false;
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){
 const {lang}=await params;if(!isLocale(lang))notFound();
 return <html lang={lang==='pt'?'pt-BR':'en'} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}} /></head><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
