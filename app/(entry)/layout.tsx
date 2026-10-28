import '../globals.css';
import {sans,serif} from '@/lib/fonts';
export default function EntryLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>}
