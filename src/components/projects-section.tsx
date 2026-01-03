"use client";

import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Kubernetes Monitoring with Prometheus & Grafana",
      description: "Deployed end-to-end Kubernetes monitoring solution with Prometheus for metrics collection (30-second scraping intervals) and Grafana dashboards for visualization. Configured ServiceMonitor CRDs for automatic service discovery and implemented PromQL queries for custom metrics. Demonstrated deep understanding of K8s observability patterns with production-ready monitoring stack using Helm.",
      image: "☸️",
      technologies: ["Kubernetes", "Helm", "Prometheus", "Grafana", "PromQL", "ServiceMonitor"],
      role: "Site Reliability Engineer",
      impact: "Production-ready observability stack deployed",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: true
    },
    {
      title: "Multi-Environment CI/CD Pipeline",
      description: "Built end-to-end CI/CD pipeline using GitHub Actions for automated build, test, and deployment to AWS EC2. Implemented multi-environment deployment strategy with separate staging and production environments. Automated Docker image builds with proper tagging strategy and SSH-based deployment to EC2 instances with health checks and rollback capabilities.",
      image: "🔄",
      technologies: ["GitHub Actions", "Docker", "AWS EC2", "Python", "SSH", "YAML"],
      role: "DevOps Engineer",
      impact: "Automated deployments to staging & production",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: true
    },
    {
      title: "ECS Fargate Container Orchestration",
      description: "Dockerized Flask application and deployed on AWS ECS Fargate with complete Terraform infrastructure as code. Designed serverless container orchestration with proper IAM roles, task definitions with health checks, and cost-effective architecture. Chose Fargate over EC2 for operational simplicity and demonstrated production-ready container deployment patterns.",
      image: "🐳",
      technologies: ["Docker", "AWS ECS", "Fargate", "Terraform", "Flask", "IAM"],
      role: "Cloud Engineer",
      impact: "Serverless container architecture deployed",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: false
    },
    {
      title: "AWS Cost & Resource Governance Automation",
      description: "Developed comprehensive Python-based AWS resource auditing and cleanup tool using Boto3 SDK. Automatically identifies and cleans up unused resources (EBS volumes, snapshots, EIPs) and stops zombie instances with low CPU usage. Implemented paginators to handle 1000+ resources, retry logic for network resilience, and unit tests for reliability.",
      image: "💰",
      technologies: ["Python", "Boto3", "AWS CLI", "CloudWatch", "Unit Testing", "Cost Explorer"],
      role: "Cloud Engineer",
      impact: "20+ hours saved monthly on AWS audits",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: false
    },
    {
      title: "Serverless SSL Certificate Monitor",
      description: "Built serverless monitoring solution using AWS Lambda to check SSL certificate expiry dates daily across multiple domains. Sends SNS alerts 30 days before expiration to prevent certificate outage incidents. Complete Terraform infrastructure as code with EventBridge scheduling. Cost-effective solution at ~$1/month compared to $30/month EC2 alternative.",
      image: "🔒",
      technologies: ["AWS Lambda", "Terraform", "Python", "SNS", "EventBridge", "SSL/TLS"],
      role: "Site Reliability Engineer",
      impact: "Prevents certificate outages, costs ~$1/month",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-justify">
            Here are some of my recent projects that showcase my skills and experience in DevOps, Cloud Engineering, and Site Reliability
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
            >
              {/* Project Image/Icon */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="h-80 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-8xl shadow-2xl">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className={`p-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">
                    {project.role}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-justify text-lg">
                  {project.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-base font-medium">
                    🚀 {project.impact}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-lg transition-all duration-300 transform hover:shadow-lg"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-center">{project.image}</div>

                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <span className="px-2 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded text-xs font-medium">
                    {project.role}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed text-justify">
                  {project.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-3">
                  <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium">
                    🚀 {project.impact}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded text-sm transition-colors"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    View
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 rounded text-sm transition-colors"
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
