import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: {extend: {colors: {obsidian:'#0A0D14', emerald:'#10B981', cyber:'#38BDF8', violet:'#818CF8'}, fontFamily:{sans:['Arial','Helvetica','sans-serif'], mono:['ui-monospace','SFMono-Regular','Consolas','monospace']}}}, plugins: []};
export default config;
