"use client";

import { useState } from "react";
import {
  ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Download, Menu, X,
  Terminal, Cloud, Boxes, GitBranch, Activity, ShieldCheck, ExternalLink,
  CheckCircle2, ServerCog, Cpu, Workflow, MapPin, ChevronRight, Layers3
} from "lucide-react";

const github = "https://github.com/Aexplorer00";
const linkedin = "https://www.linkedin.com/in/laxmi-prasad-d-741042202/";
const email = "doodalakshmiprasad@gmail.com";
const projects = [
  { number:"01", category:"OBSERVABILITY / KUBERNETES", name:"Kubernetes Observability Stack",
    summary:"End-to-end cluster visibility with Prometheus, Grafana, Helm, ServiceMonitor discovery and custom PromQL queries.",
    challenge:"Making metrics discoverable and useful across Kubernetes workloads.",
    approach:"Deployed a Prometheus and Grafana stack with Helm, configured ServiceMonitor resources and developed PromQL-based dashboards.",
    result:"A repeatable monitoring setup with 30-second metric scraping as documented in the project description.",
    stack:["Kubernetes","Prometheus","Grafana","Helm","PromQL"], icon:Activity, color:"mint" },
  { number:"02", category:"PLATFORM / DELIVERY", name:"Multi-Environment CI/CD",
    summary:"Automated build, test and delivery workflows for staging and production workloads on AWS EC2.",
    challenge:"Reducing manual deployment steps while keeping staging and production distinct.",
    approach:"Used GitHub Actions, Docker image tagging, SSH deployment, health checks and rollback-oriented workflows.",
    result:"A documented deployment pipeline across separate staging and production environments.",
    stack:["GitHub Actions","Docker","AWS EC2","YAML","Python"], icon:GitBranch, color:"blue" },
  { number:"03", category:"CLOUD / INFRASTRUCTURE", name:"ECS Fargate with Terraform",
    summary:"Containerized Flask service deployed using infrastructure as code and AWS serverless containers.",
    challenge:"Running container workloads with less host-management overhead.",
    approach:"Defined IAM roles, ECS task definitions, health checks and supporting infrastructure through Terraform.",
    result:"A reproducible Fargate deployment architecture focused on operational simplicity.",
    stack:["Terraform","AWS ECS","Fargate","Docker","IAM"], icon:Boxes, color:"violet" },
  { number:"04", category:"FINOPS / AUTOMATION", name:"AWS Resource Governance",
    summary:"Python and Boto3 resource audit automation for discovering unused cloud resources.",
    challenge:"Finding idle resources and repetitive cloud audit work.",
    approach:"Applied paginated discovery, retry logic, unit tests and resource cleanup checks for volumes, snapshots and elastic IPs.",
    result:"A tool designed to reduce recurring audit effort and surface resource waste.",
    stack:["Python","Boto3","AWS","CloudWatch","Testing"], icon:ServerCog, color:"amber" },
  { number:"05", category:"RELIABILITY / SERVERLESS", name:"SSL Certificate Watchdog",
    summary:"Scheduled certificate expiry checks with automated early-warning notifications.",
    challenge:"Preventing avoidable downtime caused by expiring TLS certificates.",
    approach:"Built scheduled checks using Lambda and EventBridge, SNS notifications and Terraform configuration.",
    result:"Alerts are designed to notify owners 30 days ahead of expiry.",
    stack:["AWS Lambda","EventBridge","SNS","Terraform","Python"], icon:ShieldCheck, color:"mint" }
];

const expertise = [
  { icon:Cloud, title:"Cloud infrastructure", description:"Provisioning and operating AWS workloads with reusable infrastructure definitions.", tags:["AWS","Terraform","CloudFormation","EC2","ECS","S3","IAM"] },
  { icon:Workflow, title:"CI/CD & automation", description:"Turning manual release and operations steps into consistent, inspectable workflows.", tags:["GitHub Actions","GitLab CI","Docker","Python","Bash","GitOps"] },
  { icon:Boxes, title:"Containers & orchestration", description:"Packaging services and operating containerized applications with reliability in mind.", tags:["Kubernetes","EKS","Helm","ECS Fargate","Docker"] },
  { icon:Activity, title:"Observability & reliability", description:"Making system health visible through metrics, dashboards and proactive alerting.", tags:["Prometheus","Grafana","CloudWatch","Dynatrace","PromQL"] }
];
const navigation = [{id:"about",label:"About"},{id:"work",label:"Projects"},{id:"expertise",label:"Expertise"},{id:"experience",label:"Experience"},{id:"contact",label:"Contact"}];

function Label({children}:{children:React.ReactNode}) {
  return <p className="eyebrow"><span className="eyebrow-line" />{children}</p>;
}

export default function Home() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [activeProject,setActiveProject]=useState(0);
  const selected=projects[activeProject];
  const Icon=selected.icon;
  return <main id="top">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#top" className="brand" aria-label="Laxmi Prasad Dooda, home"><span className="brand-mark">LP<span className="brand-dot">.</span></span><span className="brand-name">LAXMI PRASAD <span className="muted">/ SRE</span></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map(item=><a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
        <a className="nav-cta" href={`mailto:${email}`}>Let's talk <ArrowUpRight size={15}/></a>
        <button type="button" className="mobile-toggle" aria-label={menuOpen?"Close navigation":"Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={24}/>:<Menu size={24}/>}</button>
      </div>
      {menuOpen && <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">{navigation.map(item=><a key={item.id} href={`#${item.id}`} onClick={()=>setMenuOpen(false)}>{item.label}<ChevronRight size={17}/></a>)}<a href={`mailto:${email}`} onClick={()=>setMenuOpen(false)}>Get in touch <ArrowUpRight size={17}/></a></nav>}
    </header>

    <section className="hero section" id="main-content">
      <div className="hero-glow" aria-hidden="true"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability"><span className="status-light"/> ENGINEERING RELIABLE SYSTEMS <span className="availability-location">/ HYDERABAD, INDIA</span></div>
          <h1>Building infrastructure.<br/><span className="headline-accent">Engineering reliability.</span></h1>
          <p className="hero-description">I'm <strong>Laxmi Prasad Dooda</strong> — a Site Reliability / DevOps Engineer working across cloud infrastructure, delivery automation, container platforms and observability. I turn complex operations into repeatable systems.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={18}/></a><a className="button button-outline" href="/Portfolio/Laxmi_Prasad_Dooda_DevOps_Resume.pdf" target="_blank" rel="noopener noreferrer">View résumé <Download size={17}/></a></div>
          <div className="hero-social"><span>FIND ME ON</span><a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20}/></a><a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={20}/></a></div>
        </div>
        <div className="hero-terminal" aria-label="Engineering focus, terminal-style summary">
          <div className="terminal-top"><div className="traffic"><span/><span/><span/></div><span>engineering-profile.yml</span><Terminal size={16}/></div>
          <div className="terminal-body">
            <p><span className="syntax-key">engineer</span><span className="syntax-white">:</span></p>
            <p className="indent"><span className="syntax-key">name</span>: <span className="syntax-string">"Laxmi Prasad Dooda"</span></p>
            <p className="indent"><span className="syntax-key">focus</span>: <span className="syntax-string">"SRE / DevOps"</span></p>
            <p className="indent"><span className="syntax-key">experience</span>: <span className="syntax-number">4+ years</span></p>
            <p className="terminal-spacer"><span className="syntax-key">principles</span>:</p>
            <p className="indent"><span className="syntax-comment">-</span> automate the repeatable</p>
            <p className="indent"><span className="syntax-comment">-</span> observe the invisible</p>
            <p className="indent"><span className="syntax-comment">-</span> design for recovery</p>
            <p className="terminal-spacer"><span className="syntax-key">toolkit</span>:</p>
            <p className="indent"><span className="syntax-string">[aws, terraform, kubernetes,</span></p>
            <p className="indent"><span className="syntax-string"> python, ci/cd, prometheus]</span></p>
            <div className="terminal-command"><span>➜</span> <span>~</span> ./keep-improving.sh <span className="cursor">▋</span></div>
          </div>
          <div className="terminal-footer"><span><span className="status-light"/> SYSTEM THINKING: ON</span><span>01 / 05</span></div>
        </div>
      </div>
      <div className="container"><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>INFRASTRUCTURE <span className="accent-char">↗</span> AUTOMATION <span className="accent-char">↗</span> RELIABILITY</span></div></div>
    </section>

    <section className="section about-section" id="about"><div className="container two-col">
      <div><Label>01 / ABOUT</Label><h2 className="section-title">I care about what happens <em>after</em> the deploy.</h2></div>
      <div className="body-copy"><p>Reliable software needs more than a successful build. It needs infrastructure that can be reproduced, changes that can be safely delivered, and systems that tell you when something is wrong.</p><p>My background includes engineering work at <strong>Tata Consultancy Services (TCS)</strong>, with hands-on focus on AWS, infrastructure as code, delivery pipelines and monitoring. I'm particularly interested in the intersection of platform engineering, automation and site reliability.</p><div className="about-meta"><span><MapPin size={16}/> Hyderabad, India</span><span><CheckCircle2 size={16}/> Systems-minded engineering</span></div></div>
    </div></section>

    <section className="section work-section" id="work"><div className="container">
      <div className="section-head"><div><Label>02 / SELECTED WORK</Label><h2 className="section-title">Proof of <em>work.</em></h2></div><p>Five engineering builds spanning observability, delivery, cloud infrastructure and proactive reliability.</p></div>
      <div className="project-layout">
        <div className="project-list" role="tablist" aria-label="Select project">{projects.map((project,index)=>{const ProjectIcon=project.icon;return <button key={project.number} type="button" role="tab" id={`project-tab-${index}`} aria-selected={activeProject===index} aria-controls="project-detail" className={`project-option ${activeProject===index?"active":""}`} onClick={()=>setActiveProject(index)}><span className="project-index">{project.number}</span><span className="project-option-main"><span className="project-option-category">{project.category}</span><span className="project-option-name">{project.name}</span></span><ProjectIcon className="project-option-icon" size={22}/></button>})}</div>
        <article className="project-detail" id="project-detail" role="tabpanel" aria-labelledby={`project-tab-${activeProject}`}>
          <div className="project-visual"><div className="project-visual-grid"/><div className="project-visual-symbol"><Icon size={57} strokeWidth={1.2}/></div><div className="project-visual-label"><span className="status-light"/> {selected.category}</div><span className="project-visual-index">0{activeProject+1} / 05</span></div>
          <div className="project-detail-content"><div className="detail-kicker">CASE STUDY <span>/</span> {selected.number}</div><h3>{selected.name}</h3><p className="detail-summary">{selected.summary}</p><div className="detail-breakdown"><div><span>THE PROBLEM</span><p>{selected.challenge}</p></div><div><span>THE APPROACH</span><p>{selected.approach}</p></div><div><span>THE OUTCOME</span><p>{selected.result}</p></div></div><div className="stack-list">{selected.stack.map(t=><span key={t}>{t}</span>)}</div><a className="text-link" href={github} target="_blank" rel="noopener noreferrer">Explore my GitHub <ArrowUpRight size={17}/></a></div>
        </article>
      </div><p className="source-note">Project summaries are based on the existing portfolio. Individual repository and live-demo links will be added when verified; the current link opens the GitHub profile.</p>
    </div></section>

    <section className="section expertise-section" id="expertise"><div className="container"><div className="section-head"><div><Label>03 / CAPABILITIES</Label><h2 className="section-title">The tools are a means.<br/><em>Reliable outcomes are the goal.</em></h2></div><p>Capabilities organized around how engineering work actually gets done, not arbitrary percentage ratings.</p></div><div className="expertise-grid">{expertise.map((item,index)=>{const EIcon=item.icon;return <article key={item.title} className="expertise-card"><div className="expertise-card-top"><span>0{index+1} / 04</span><EIcon size={26} strokeWidth={1.5}/></div><h3>{item.title}</h3><p>{item.description}</p><div className="stack-list">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>})}</div></div></section>

    <section className="section experience-section" id="experience"><div className="container two-col">
      <div><Label>04 / EXPERIENCE</Label><h2 className="section-title">An operator's<br/><em>mindset.</em></h2><p className="experience-intro">I focus on the engineering practices that make infrastructure less fragile and teams more effective.</p></div>
      <div className="experience-panel"><div className="experience-overline"><span className="status-light"/> PROFESSIONAL BACKGROUND</div><div className="experience-heading"><div><h3>Tata Consultancy Services</h3><p>Site Reliability / DevOps Engineering</p></div><span>4+ YEARS*</span></div><div className="timeline-line"/><ul><li><CheckCircle2 size={17}/> AWS infrastructure provisioning and automation</li><li><CheckCircle2 size={17}/> CI/CD workflows and container delivery</li><li><CheckCircle2 size={17}/> Monitoring, alerting and operational visibility</li><li><CheckCircle2 size={17}/> Python and shell tooling for repetitive tasks</li></ul><p className="experience-footnote">*Experience duration and employer are taken from the existing repository and should be verified against the latest résumé.</p></div>
    </div></section>

    <section className="section principles-section"><div className="container"><Label>05 / HOW I THINK</Label><div className="principles-grid"><div><span>01 — AUTOMATE</span><h3>If it repeats,<br/>make it reproducible.</h3><p>Infrastructure as code, dependable pipelines and fewer manual steps.</p></div><div><span>02 — OBSERVE</span><h3>Visibility before<br/>guesswork.</h3><p>Metrics, dashboards and alerts that make system behavior actionable.</p></div><div><span>03 — RECOVER</span><h3>Design for the<br/>unhappy path.</h3><p>Health checks, rollback thinking and operationally simple architectures.</p></div></div></div></section>

    <section className="contact-section section" id="contact"><div className="container contact-container"><Label>06 / CONTACT</Label><h2>Have a hard infrastructure<br/>problem? <em>Let's solve it.</em></h2><p>I'm interested in thoughtful conversations about SRE, DevOps, cloud platforms, automation and engineering opportunities.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${email}?subject=Let's%20connect%20about%20engineering`}>Start a conversation <ArrowUpRight size={19}/></a><a className="contact-email" href={`mailto:${email}`}>{email}</a></div><div className="contact-orbit" aria-hidden="true"><Layers3 size={220} strokeWidth={.5}/></div></div></section>
    <footer className="site-footer"><div className="container footer-inner"><a href="#top" className="footer-logo">LP<span>.</span></a><span>© {new Date().getFullYear()} Laxmi Prasad Dooda. Built with intent.</span><div><a href={github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13}/></a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href="#top">Back to top ↑</a></div></div></footer>
  </main>;
}
