import sharp from 'sharp';
import {readFile} from 'node:fs/promises';
const profile=JSON.parse(await readFile(new URL('../content/profile.json',import.meta.url),'utf8'));
for(const lang of ['pt','en']){
const svg=`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f5f3ed"/><path d="M72 64h1056M72 558h1056" stroke="#cacbc1"/><text x="72" y="125" font-family="sans-serif" font-size="22" fill="#9b4228">PHP / PYTHON / API</text><text x="68" y="265" font-family="serif" font-size="92" fill="#222923">Lucas Gabriel</text><text x="68" y="365" font-family="serif" font-size="112" fill="#222923">Ferreira.</text><text x="72" y="465" font-family="sans-serif" font-size="29" fill="#3d493f">${profile[lang].title}</text><g fill="none" stroke="#a54d30" stroke-width="3"><path d="M900 210L1040 300 900 430 780 300Z M780 300h260M900 210v220"/><circle cx="900" cy="300" r="35" fill="#f5f3ed"/><circle cx="900" cy="210" r="9"/><circle cx="1040" cy="300" r="9"/><circle cx="900" cy="430" r="9"/><circle cx="780" cy="300" r="9"/></g><text x="72" y="598" font-family="sans-serif" font-size="19" fill="#3d493f">Natal, Brazil · ${lang==='pt'?'APIs, integrações e observabilidade':'APIs, integrations and observability'}</text></svg>`;
await sharp(Buffer.from(svg)).png().toFile(new URL(`../public/og-${lang}.png`,import.meta.url).pathname);
}
await sharp(new URL('../public/icon.svg',import.meta.url).pathname).resize(180,180).png().toFile(new URL('../public/apple-icon.png',import.meta.url).pathname);
