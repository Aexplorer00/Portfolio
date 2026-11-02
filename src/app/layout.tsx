import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Laxmi Prasad Dooda | SRE, Platform & AI Systems Engineer',description:'Laxmi Prasad Dooda — enterprise site reliability engineering, cloud infrastructure, production incident response, platform automation and AI systems engineering.',robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
