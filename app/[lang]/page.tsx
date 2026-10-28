import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Portfolio from '@/components/Portfolio';
import profile from '@/content/profile';
import {isLocale,siteUrl} from '@/lib/site';
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{
 const {lang}=await params;if(!isLocale(lang))notFound();const c=profile[lang];
 return {metadataBase:new URL(siteUrl),title:`${profile.name} | ${c.title}`,description:c.summary,alternates:{canonical:`/${lang}/`,languages:{'pt-BR':'/pt/','en':'/en/','x-default':'/pt/'}},openGraph:{title:`${profile.name} | ${c.title}`,description:c.summary,url:`/${lang}/`,siteName:profile.name,locale:lang==='pt'?'pt_BR':'en_US',type:'website',images:[{url:`/og-${lang}.png`,width:1200,height:630}]},twitter:{card:'summary_large_image',title:`${profile.name} | ${c.title}`,description:c.summary,images:[`/og-${lang}.png`]},icons:{icon:'/icon.svg',apple:'/apple-icon.png'}};
}
export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang}=await params;if(!isLocale(lang))notFound();
 const data={'@context':'https://schema.org','@type':'Person',name:profile.name,jobTitle:profile[lang].title,url:`${siteUrl}/${lang}/`,email:profile.email,image:`${siteUrl}/portrait.webp`,sameAs:[profile.github,profile.linkedin],knowsLanguage:['pt-BR','en'],alumniOf:{'@type':'CollegeOrUniversity',name:'Universidade Federal do Rio Grande do Norte'}};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/><Portfolio lang={lang}/></>;
}
