export type Category = 'AI & MLOps' | 'Kubernetes & Containers' | 'Cloud & Terraform' | 'Observability & Reliability' | 'Python Core DSA';
export type Project = {
  id:string; index:string; title:string; category:Category; subtitle:string; problem:string; solution:string; impact:string; evidence:'Production-validated outcome'|'Empirical benchmark'|'Architecture proof-of-concept';
  stack:string[]; nodes:string[]; edges:[number,number][]; github?:string;
};
export const projects: Project[] = [
  {
    id:'agent',
    index:'01',
    title:'Autonomous SRE Remediation Agent',
    category:'AI & MLOps',
    subtitle:'Model Context Protocol (MCP) · Sandboxed diagnostics · Human approval gate',
    problem:'Manual alert triage across disparate telemetry silos and fragmented CLI diagnostics balloons on-call MTTR and increases cognitive toil during high-severity incidents.',
    solution:'Engineered a deterministic ReAct diagnostic agent using Anthropic Claude API and MCP. Ingests PagerDuty alert webhooks, queries read-only PromQL/cluster state in isolated sandboxes, formulates root-cause analyses, and enforces cryptographic human approval gates before executing stateful remediations.',
    impact:'~70% Faster Triage',
    evidence:'Production-validated outcome',
    stack:['Python','Model Context Protocol','Claude API','Prometheus','Human-in-the-Loop'],
    nodes:['Alert Ingestion','MCP Protocol Gateway','Sandboxed Diagnostics','RCA Draft + Human Approval'],
    edges:[[0,1],[1,2],[2,3]]
  },
  {
    id:'healer',
    index:'02',
    title:'Kubernetes Self-Healing Ingress Gateway',
    category:'Kubernetes & Containers',
    subtitle:'Zero-drop rollouts · PodDisruptionBudgets · Automated rollback controller',
    problem:'Canary rollout regressions, uncoordinated SIGTERM termination, and premature endpoint deregistrations routinely drop in-flight HTTP connections during active cluster node turnover.',
    solution:'Constructed an automated deployment operator and ingress controller that synchronizes preStop connection draining, tunes endpoint readiness gates, monitors 5xx error budgets in real time, and executes automated sub-second rollbacks upon SLO degradation.',
    impact:'Zero Dropped Requests',
    evidence:'Empirical benchmark',
    stack:['Kubernetes','AWS EKS','Python Operator','NGINX Ingress','Podman'],
    nodes:['Ingress Traffic','Canary Rollout Gate','Real-Time SLO Monitor','Automated Rollback Engine'],
    edges:[[0,1],[1,2],[2,3]]
  },
  {
    id:'events',
    index:'03',
    title:'Event-Driven Decoupled Message Bus',
    category:'Cloud & Terraform',
    subtitle:'Terraform IaC · Amazon SQS & EventBridge · DLQ redrive automation',
    problem:'Synchronous REST microservice dependencies introduce tight latency coupling, cascading connection exhaustion, and catastrophic fail-stop behavior when downstream services stall.',
    solution:'Architected an enterprise asynchronous messaging backbone provisioned via Terraform modules. Leverages Amazon EventBridge content-filtering and SQS with exponential backoff, dead-letter quarantine routing, bounded retention, and CloudWatch high-watermark alarms.',
    impact:'100% Upstream Decoupling',
    evidence:'Empirical benchmark',
    stack:['Terraform','AWS SQS','Amazon EventBridge','AWS SNS','CloudWatch'],
    nodes:['Upstream Publisher','EventBridge Router','SQS + Worker Fleet','Dead-Letter Queue + Alarms'],
    edges:[[0,1],[1,2],[2,3]]
  },
  {
    id:'ansible',
    index:'04',
    title:'Dynamic Fleet Configuration & CIS Hardening',
    category:'Cloud & Terraform',
    subtitle:'Dynamic cloud inventory · Idempotent orchestration · Zero drift attestation',
    problem:'Dynamic cloud autoscaling causes static compute inventories to silently drift, introducing compliance violations, non-deterministic kernel tuning, and unpatched CVE exposures.',
    solution:'Engineered automated dynamic inventory discovery scripts paired with modular Ansible roles implementing CIS Level 1 security benchmarks, strict idempotency validation, and automated second-pass changed=0 drift attestation in CI/CD.',
    impact:'Zero-Drift (changed=0)',
    evidence:'Production-validated outcome',
    stack:['Ansible','Python Automation','Linux Kernel','Dynamic Inventory','CIS Benchmarks'],
    nodes:['Cloud Instance Metadata','Dynamic Inventory Script','Modular Ansible Roles','CI/CD Idempotency Check'],
    edges:[[0,1],[1,2],[2,3]]
  },
  {
    id:'logs',
    index:'05',
    title:'Centralized High-Throughput Observability Pipeline',
    category:'Observability & Reliability',
    subtitle:'Fluent Bit · Amazon Kinesis buffering · OpenSearch · Multi-window burn alerts',
    problem:'High-volume unstructured stdout logs, backpressure buffer overflows, and fragmented alerting systems create operational blind spots during critical infrastructure incidents.',
    solution:'Engineered a low-footprint Fluent Bit log streaming architecture buffered with Amazon Kinesis, parsing structured JSON payloads into OpenSearch with Multi-Window Multi-Burn-Rate Prometheus SLO alerts and RED dashboards.',
    impact:'Sub-Second Log Indexing',
    evidence:'Empirical benchmark',
    stack:['Fluent Bit','OpenSearch','Amazon Kinesis','Grafana','Prometheus PromQL'],
    nodes:['Application Pods','Fluent Bit Collectors','Kinesis Stream Buffer','OpenSearch + SLO Dashboards'],
    edges:[[0,1],[1,2],[2,3]]
  }
];
export const skillGroups = [
  {name:'AI & MLOps',key:'AI & MLOps',description:'LLM inference optimization, agentic orchestration, and AI systems reliability signals',items:['Claude Messages API','Prompt Caching & Evals','Model Context Protocol (MCP)','ReAct & Tool Use','vLLM / PagedAttention','Triton / TensorRT-LLM','TTFT / TPOT / KV Cache','NVIDIA GPU Operator & MIG','KEDA / GPU XID Monitoring']},
  {name:'Kubernetes & Containers',key:'Kubernetes & Containers',description:'Production scheduling, safe rollout strategies, and kernel namespace isolation',items:['Kubernetes / EKS / KinD','Controllers & DaemonSets','StatefulSets & PDBs','preStop Traffic Draining','Podman / Rootless Containers','Linux Namespaces & cgroups v2','Karpenter & Spot Bin-Packing']},
  {name:'Cloud & Terraform',key:'Cloud & Terraform',description:'Repeatable modular infrastructure, secure networking, and resilient event systems',items:['Terraform Modules & State Locks','S3 Remote State & Drift Checks','AWS VPC / PrivateLink / IRSA','SQS / DLQ / EventBridge Buses','SNS / Kafka / MSK Streams','Ansible Dynamic Inventory','CloudFormation & Local AWS']},
  {name:'Observability & Reliability',key:'Observability & Reliability',description:'Golden signals, high-fidelity tracing, and multi-window error budget burn alerting',items:['Prometheus & PromQL','Multi-Window Burn-Rate Alerts','Grafana USE & RED Metrics','Alertmanager & CloudWatch','Fluent Bit & OpenSearch','Datadog & Dynatrace','Gitleaks & DevSecOps']},
  {name:'Python Core DSA',key:'Python Core DSA',description:'Defensive automation, memory optimization, and algorithmic first-principles',items:['Python ThreadPool & Concurrency','Sliding Window & Hash Maps','Circuit Breakers & Token Buckets','Backoff with Full Jitter','Idempotent Event Consumers','__slots__ & Memory Optimization','Low-Level Design & Test Harnesses']}
] as const;
export const filters = ['All','AI & MLOps','Kubernetes & Containers','Cloud & Terraform','Observability & Reliability','Python Core DSA'] as const;
export const socials = {github:'https://github.com/Aexplorer00',linkedin:'https://www.linkedin.com/in/laxmi-prasad-d-741042202/',email:'doodalakshmiprasad@gmail.com'};
