'use client';
import {useEffect,useState} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
import {ArrowUpRight,Download,Github,Linkedin} from 'lucide-react';
import {socials} from '@/data/content';
const roles=['Site Reliability Engineer (SRE)','Platform Architect','AI Infrastructure Engineer'];
const commands = [
 '$ kubectl get nodes -o wide',
 'NAME          STATUS    ROLES     AGE',
 'eks-core-01   Ready     worker    18d',
 'eks-gpu-02    Ready     gpu       12d',
 '$ curl -s /healthz',
 '{ "status": "healthy", "checks": 8 }',
 '$ prometheus_query "slo:availability"',
 'availability_ratio{service="api"} 0.9994',
 '$ agentctl inspect --mode read-only',
 'MCP diagnostics ready · approval required'
];
export default function Hero(){const [role,setRole]=useState(0);const [lines,setLines]=useState(4);const reduced=useReducedMotion();
 useEffect(()=>{if(reduced)return;const id=setInterval(()=>setRole(n=>(n+1)%roles.length),3500);return()=>clearInterval(id)},[reduced]);
 useEffect(()=>{if(reduced){setLines(commands.length);return}const id=setInterval(()=>setLines(n=>n>=commands.length?4:n+1),1400);return()=>clearInterval(id)},[reduced]);
 return <section className="hero wrap" id="home"><div className="hero-copy"><div className="eyebrow"><span className="mini-line"/><span className="hero-identity-role">SRE, PLATFORM & AI SYSTEMS ENGINEER</span></div><motion.h1 initial={reduced?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>Architecting Resilient<br/><span>Distributed Systems</span><br/>& Autonomous AI Platforms<span className="end-dot">.</span></motion.h1><p className="role"><span className="pulse-dot"/>{roles[role]}</p><p className="hero-lead"><strong>I’m Laxmi Prasad Dooda.</strong> For 4.8+ years, I have engineered and defended mission-critical enterprise systems—driving 99.95% availability across regulated healthcare streaming platforms, orchestrating automated incident pipelines, and executing multi-region disaster recovery drills. Today, I translate that frontline production judgment into resilient Kubernetes platforms, infrastructure as code, and dependable AI inference architectures.</p><div className="hero-highlights" aria-label="Selected engineering outcomes"><span><strong>99.95%</strong><small>peak-window availability</small></span><span><strong>~70%</strong><small>less incident triage time</small></span><span><strong>5</strong><small>enterprise case studies</small></span></div><blockquote>“Code is temporary, architecture is enduring, reliability is non-negotiable.”</blockquote><div className="hero-actions"><a className="btn btn-primary" href="#production">Explore Production Work <ArrowUpRight size={16}/></a><a className="btn btn-secondary" href={socials.github} target="_blank" rel="noopener noreferrer">View GitHub <Github size={16}/></a><a className="btn btn-secondary" href={process.env.NODE_ENV === "production" ? "/Portfolio/resume.pdf" : "/resume.pdf"} target="_blank" rel="noopener noreferrer">Download Résumé <Download size={16}/></a></div></div><div className="hero-visual"><div className="terminal"><div className="terminal-title"><span className="lights"><i/><i/><i/></span><span>sre-console / cluster.log</span><span className="terminal-live">● LIVE DEMO</span></div><div className="terminal-screen" aria-label="Simulated terminal output">{commands.slice(0,lines).map((c,i)=><p key={i} className={c.startsWith('$')?'cmd':c.startsWith('{')||c.includes('ready')?'good':''}>{c}</p>)}<span className="caret">▌</span></div><div className="terminal-bottom"><span><span className="pulse-dot"/> SANDBOX SIMULATION</span><span>NO LIVE CLUSTER CONNECTION</span></div></div></div></section>
}
