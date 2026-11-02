'use client';
import {Activity, Cpu, ShieldCheck, Timer} from 'lucide-react';
import {useEffect,useState} from 'react';
const initial = {budget:99.94,latency:42};
export default function MetricsWidget(){
 const [metrics,setMetrics]=useState(initial);
 useEffect(()=>{let tick=0; const id=setInterval(()=>{tick++;setMetrics({budget:99.94+Math.sin(tick/8)*.012,latency:42+Math.round(Math.sin(tick/3)*4)})},4500);return()=>clearInterval(id)},[]);
 return <div className="telemetry" aria-label="Simulated system telemetry"><div className="wrap telemetry-inner"><span className="sim-note"><span className="pulse-dot"/>SIMULATED TELEMETRY</span><div><ShieldCheck size={14}/><span>CLUSTER</span><strong>HEALTHY</strong></div><div><Activity size={14}/><span>ERROR BUDGET</span><strong>{metrics.budget.toFixed(2)}%</strong></div><div><Cpu size={14}/><span>GPU FABRIC</span><strong>OPTIMAL</strong></div><div><Timer size={14}/><span>P99 LATENCY</span><strong>{metrics.latency}ms</strong></div></div></div>
}
