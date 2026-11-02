import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Laxmi Prasad Dooda | SRE, Platform & AI Systems Engineer',description:'An engineering mission control showcasing SRE, cloud-native platforms, observability, Kubernetes, infrastructure as code and AI systems labs.',robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
