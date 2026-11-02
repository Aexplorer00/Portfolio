export type ProductionCase = {id:string; index:string; title:string; domain:string; problem:string; ownership:string[]; decisions:string[]; impact:string; measurement:string; tradeoff:string; stack:string[]; nodes:string[]};
export const productionCases:ProductionCase[] = [
{
  id:'enrollment',
  index:'01',
  title:'Healthcare Enrollment Streaming Platform',
  domain:'SECURE STREAMING · MULTI-CLOUD',
  problem:'High-volume Medicare/Medicaid open-enrollment spikes (3–5× baseline) caused duplicate claims ingestion, synchronous partner API timeouts, and zero downstream visibility into data drops.',
  ownership:[
    'Architected high-throughput Python pre-ingestion pipeline enforcing SHA-256 fingerprint deduplication before queueing',
    'Engineered automated mTLS certificate rotation monitoring, alerting SRE teams 30 days ahead of expiry',
    'Optimized Kafka consumer group partition rebalancing and buffer capacities to absorb severe burst traffic',
    'Maintained 24/7 tier-1 incident ownership, ensuring zero data loss across critical open-enrollment windows'
  ],
  decisions:[
    'Edge API validation with mTLS authentication to reject invalid partner payloads at boundary',
    'Pre-ingestion SHA-256 state hashing against distributed Redis cache to prevent duplicate downstream claims',
    'Kafka at-least-once delivery with tuned partition keys, committing offsets only after successful storage',
    'Dead-letter queue (DLQ) redrive automation with structured error metadata for deterministic reprocessing'
  ],
  impact:'99.95% Availability During 5× Peaks',
  measurement:'Maintained 99.95% availability SLA across open-enrollment peak windows with zero transaction drop incidents.',
  tradeoff:'At-least-once Kafka streaming ensures zero message loss under failure, requiring downstream consumers to be strictly idempotent via deduplication keys.',
  stack:['Kafka','Python','Apigee','mTLS','Azure','AWS S3','Redis'],
  nodes:['B2B Partner Intake','Apigee Gateway + mTLS','Python Dedup & Validation','Kafka Partitioned Bus','Consumer + DLQ Redrive']
},
{
  id:'incident',
  index:'02',
  title:'Azure → Splunk → ServiceNow Incident Automation',
  domain:'OBSERVABILITY · INCIDENT RESPONSE',
  problem:'Retirement of legacy monitoring left Azure infrastructure alerts without an automated route into ServiceNow, forcing manual portal polling and ballooning P1/P2 MTTR.',
  ownership:[
    'Architected and authored serverless Python Azure Functions processing high-volume Azure Monitor webhooks',
    'Engineered real-time KQL parsing, dynamic alert severity mapping, and structured CMDB enrichment',
    'Integrated Splunk HTTP Event Collector (HEC) and ServiceNow REST APIs with exponential retry backoff',
    'Built self-monitoring health checks and dead-letter alarms around the event ingestion pipeline itself'
  ],
  decisions:[
    'Execute event transformation serverless-native inside Azure Monitor to minimize cross-network latency',
    'Enrich alert payloads with dynamic CMDB CI-tags, historical baselines, and actionable runbook links',
    'Format structured JSON payloads with correlation IDs for end-to-end trace auditing in Splunk HEC',
    'Implement circuit-breaker thresholds to prevent cascading alert storms from overwhelming ServiceNow'
  ],
  impact:'~70% Faster Incident Triage',
  measurement:'Demonstrated a ~70% reduction in MTTR (rolling 90-day average) across enterprise P1/P2 operational incidents.',
  tradeoff:'Custom serverless pipelines introduce operational codebase ownership, but deliver critical dynamic context and schema flexibility that proprietary connectors lack.',
  stack:['Azure Functions','Python','KQL','Splunk HEC','ServiceNow','REST APIs'],
  nodes:['Azure Monitor Webhooks','Serverless Python Parser','CMDB Enrichment','Splunk HEC Auditing','ServiceNow Incident Bus']
},
{
  id:'drain',
  index:'03',
  title:'Zero-Downtime Middleware Deployment Strategy',
  domain:'RELIABILITY · DEPLOYMENT SAFETY',
  problem:'Rolling application deployments and OS host patch cycles caused connection resets, dropped in-flight transactions, and sporadic host boot order failures across distributed WebLogic/IIS clusters.',
  ownership:[
    'Designed deterministic load-balancer connection draining protocols for stateful enterprise clusters',
    'Diagnosed and resolved systemd unit dependency races, mount deadlocks, and boot-order startup failures',
    'Built automated pre-flight health gates verifying socket connectivity, thread pools, and HTTP probes',
    'Authored battle-tested P1 recovery runbooks and conducted quarterly chaos failure validations'
  ],
  decisions:[
    'Decouple instances from load-balancer rotation before initiating service shutdown sequences',
    'Enforce 120-second connection draining windows to allow in-flight HTTP transactions to complete cleanly',
    'Block host re-entry until multi-layer health checks (TCP socket, JVM heap, DB pool, HTTP 200) pass',
    'Implement automated rollback triggers upon post-deployment error rate anomalies'
  ],
  impact:'Zero In-Flight Dropped Transactions',
  measurement:'Achieved 0 in-flight transaction drops and zero deployment-related 5xx spikes across scheduled release cycles.',
  tradeoff:'Stateful session affinity precluded instant blue-green switching; sequenced connection draining with verification gates provided maximum reliability without breaking active sessions.',
  stack:['Oracle WebLogic','IIS','Linux systemd','F5 / Azure LB','Python','Bash'],
  nodes:['LB Drain Trigger','Graceful Session Turnover','Patching & JVM Restart','Multi-Layer Health Gate','LB Active Re-Entry']
},
{
  id:'sentinel',
  index:'04',
  title:'Entra ID Service Principal Expiration Sentinel',
  domain:'SECURITY · PROACTIVE AUTOMATION',
  problem:'Silent expiration of enterprise Service Principal credentials and certificates caused sudden authentication blackouts, halting data integration jobs and breaking third-party connections.',
  ownership:[
    'Developed an autonomous Python scanner utilizing MSAL and Microsoft Graph API to audit enterprise tenants',
    'Engineered an intelligent tiered notification engine (45, 30, 15, 7, and 1-day urgency thresholds)',
    'Automated owner attribution by cross-referencing ServiceNow CMDB and Azure metadata tags',
    'Instituted automated high-priority escalation triggers for unacknowledged critical expirations'
  ],
  decisions:[
    'Query Microsoft Graph API in scheduled batch cycles using rate-limited, cached token pagination',
    'Classify credentials into tiered SLA urgency horizons to eliminate alarm fatigue',
    'Enforce direct ownership accountability by mapping app registrations directly to technical contacts',
    'Expose credential health metrics via structured logs to integrate with central enterprise dashboards'
  ],
  impact:'Zero Authentication Outages',
  measurement:'Eliminated 100% of credential-expiry-related P1/P2 production incidents across 500+ enterprise application registrations.',
  tradeoff:'Automated alerts resolve visibility gaps and mitigate risk, but permanent reliability requires organizational adherence to automated key rotation protocols.',
  stack:['Microsoft Graph API','Python MSAL','Entra ID','ServiceNow CMDB','Azure Automation'],
  nodes:['Scheduled Graph Scan','Credential Age Extractor','CMDB Owner Mapping','Tiered Urgency Router','Automated Escalation']
},
{
  id:'dr',
  index:'05',
  title:'Multi-Region Disaster Recovery Validation',
  domain:'DISASTER RECOVERY · MULTI-CLOUD',
  problem:'Enterprise disaster recovery strategies relied on theoretical paper runbooks; unverified DNS failover risked routing production traffic to out-of-sync or unready secondary regions.',
  ownership:[
    'Spearheaded architecture, staging, and technical execution of enterprise multi-region DR drills',
    'Engineered synthetic transaction verification suites to validate data consistency prior to DNS cutover',
    'Orchestrated Azure Traffic Manager routing policies and Azure SQL Server Failover Group transitions',
    'Codified comprehensive failover, split-brain mitigation, and failback operational runbooks'
  ],
  decisions:[
    'Automate DNS failover through Azure Traffic Manager priority routing with health check endpoints',
    'Activate asynchronous SQL Server Failover Groups with zero data loss pre-checks before traffic shift',
    'Mandate end-to-end synthetic user-flow validation across secondary storage and API tiers before cutover confirmation',
    'Enforce deterministic failback criteria to eliminate data diverging across regions during recovery'
  ],
  impact:'RTO < 30m / RPO < 5m Validated',
  measurement:'Consistently achieved recovery within strict regulatory targets during live simulated failover drills.',
  tradeoff:'Active-passive multi-region architecture incurs asynchronous replication lag; synthetic verification ensures transactional integrity before routing live user workloads.',
  stack:['Azure Traffic Manager','Azure SQL Auto-Failover','Azure Blob Storage','AWS','Synthetic Probes'],
  nodes:['Health Degradation Signal','Traffic Manager Cutover','Database Failover Group','Synthetic Verification Gate','Production Re-Certification']
}
];
