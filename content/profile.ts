import source from './profile.json';
import type { Locale } from '../lib/site';
export type ProfileContent = {
 title:string;summary:string;bio:string;availability:string;
 experience:Array<{id:string;company:string;role:string;period:string;location:string;bullets:string[]}>;
 education:Array<{institution:string;degree:string;period:string}>;
 skills:Array<{category:string;items:string[]}>;languages:string[];
};
const localized:Record<Locale,ProfileContent>={pt:source.pt,en:source.en};
const profile={...source,...localized};
export default profile;
