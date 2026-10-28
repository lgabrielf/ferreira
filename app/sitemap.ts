import type {MetadataRoute} from 'next';
import {siteUrl} from '@/lib/site';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['pt','en'].map(lang=>({url:`${siteUrl}/${lang}/`,alternates:{languages:{'pt-BR':`${siteUrl}/pt/`,'en':`${siteUrl}/en/`}},changeFrequency:'monthly',priority:1}));}
