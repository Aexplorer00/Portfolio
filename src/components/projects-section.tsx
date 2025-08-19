"use client";

import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Automated Infrastructure Deployment",
      description: "Led development of enterprise-grade reusable Terraform modules to provision AWS resources including EC2, RDS, S3, and IAM roles for 15+ production applications. Integrated GitHub Actions workflows with automated testing and validation to trigger infrastructure changes upon PR merges. Achieved 95% deployment success rate with automated rollback support, reducing infrastructure provisioning time from 4 hours to 15 minutes.",
      image: "🏗️",
      technologies: ["Terraform", "GitHub Actions", "AWS", "IAM", "EC2", "RDS", "S3"],
      role: "DevOps Engineer",
      impact: "95% success rate, 15+ apps automated",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: true
    },
    {
      title: "Multi-Region EC2 Application Deployment",
      description: "Architected and implemented multi-region deployment strategy for Python-based web applications across 3 AWS regions using GitLab CI/CD pipelines. Configured advanced CloudWatch custom metrics, intelligent alarms with SNS notifications, and Route 53 health checks with automatic failover routing. Achieved 99.9% uptime and reduced regional failure impact by 80%.",
      image: "🌐",
      technologies: ["GitLab CI/CD", "EC2", "CloudWatch", "Route 53", "Python", "SNS", "ALB"],
      role: "Site Reliability Engineer",
      impact: "99.9% uptime, 3 regions deployed",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: true
    },
    {
      title: "AWS Audit Script",
      description: "Developed comprehensive Python-based AWS resource auditing tool using Boto3 SDK that automatically scans and inventories cloud infrastructure across 10+ AWS services including EC2, S3, IAM, RDS, and Lambda. Implemented detailed cost analysis, security compliance checks, and automated reporting with JSON/CSV export capabilities. Saved 20+ hours of manual audit work per month.",
      image: "🔍",
      technologies: ["Python", "Boto3", "AWS CLI", "JSON", "Logging", "Cost Explorer"],
      role: "Cloud Engineer",
      impact: "20+ hours saved monthly",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: false
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Built and optimized enterprise CI/CD pipelines using GitHub Actions, AWS CodePipeline, and CodeDeploy for multi-environment deployments. Implemented automated testing with Jest/SonarQube, security scanning, and blue-green deployment strategies. Reduced deployment time from 2 hours to 25 minutes and achieved 99.9% deployment success rate with automated rollback mechanisms.",
      image: "⚙️",
      technologies: ["GitHub Actions", "CodePipeline", "CodeDeploy", "Docker", "Jest", "SonarQube"],
      role: "DevOps Engineer",
      impact: "87% faster deployments, 99.9% success rate",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: false
    },
    {
      title: "Kubernetes EKS Deployment",
      description: "Containerized 8+ microservices applications using Docker and orchestrated deployment on Amazon EKS clusters with high availability across multiple AZs. Implemented ArgoCD for GitOps-based application delivery, Helm charts for package management, and Horizontal Pod Autoscaler (HPA) for automated scaling. Achieved 99.95% uptime and successfully handled 10x traffic spikes during peak loads.",
      image: "☸️",
      technologies: ["Kubernetes", "Amazon EKS", "Docker", "ArgoCD", "Helm", "HPA", "NGINX"],
      role: "Site Reliability Engineer",
      impact: "99.95% uptime, 10x traffic capacity",
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: false
    },
    {
      title: "Monitoring & Observability Setup",
      description: "Enhanced system observability using AWS CloudWatch, Dynatrace, and Prometheus for comprehensive monitoring across 20+ production services. Designed custom dashboards with key SLIs/SLOs, implemented intelligent alerting with PagerDuty integration, and created automated incident response workflows. Reduced Mean Time to Recovery (MTTR) from 45 minutes to 8 minutes through proactive monitoring.",
      image: "📊",
      technologies: ["CloudWatch", "Dynatrace", "Prometheus", "Grafana", "PagerDuty", "ELK Stack"],
      role: "SRE/DevOps Engineer",
      impact: "MTTR reduced by 82%",
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
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
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
