"use client";

import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Automated Infrastructure Deployment",
      description: "Developed reusable Terraform modules to provision AWS resources such as EC2, RDS, S3, and IAM roles. Integrated GitHub Actions workflows to trigger infrastructure changes upon PR merges, ensuring infrastructure-as-code (IaC) consistency with rollback support.",
      image: "🏗️",
      technologies: ["Terraform", "GitHub Actions", "AWS", "IAM", "EC2", "RDS"],
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: true
    },
    {
      title: "Multi-Region EC2 Application Deployment",
      description: "Automated multi-region deployment of a Python-based web application to EC2 instances using GitLab CI/CD. Configured CloudWatch custom metrics and alarms with SNS notifications, ensuring high availability with Route 53 health checks and failover routing.",
      image: "🌐",
      technologies: ["GitLab CI/CD", "EC2", "CloudWatch", "Route 53", "Python", "SNS"],
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: true
    },
    {
      title: "AWS Audit Script",
      description: "Python-based AWS resource auditing tool that automatically scans and inventories cloud infrastructure across multiple AWS services including EC2, S3, and IAM with comprehensive logging and reporting.",
      image: "🔍",
      technologies: ["Python", "Boto3", "AWS", "Logging", "Automation"],
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: false
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Built and optimized CI/CD pipelines using GitHub Actions, AWS CodePipeline, and CodeDeploy for seamless delivery. Reduced deployment time by 60% and improved reliability through automated testing and rollback mechanisms.",
      image: "⚙️",
      technologies: ["GitHub Actions", "CodePipeline", "CodeDeploy", "Docker"],
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: false
    },
    {
      title: "Kubernetes EKS Deployment",
      description: "Containerized applications with Docker and contributed to Kubernetes (EKS) deployment and configuration. Implemented ArgoCD for GitOps-based application delivery and automated scaling policies.",
      image: "☸️",
      technologies: ["Kubernetes", "EKS", "Docker", "ArgoCD", "Helm"],
      liveUrl: "https://github.com/Aexplorer00",
      githubUrl: "https://github.com/Aexplorer00",
      featured: false
    },
    {
      title: "Monitoring & Observability Setup",
      description: "Enhanced observability using AWS CloudWatch and Dynatrace, leading to faster issue detection and resolution. Implemented custom dashboards, alerts, and automated incident response workflows.",
      image: "�",
      technologies: ["CloudWatch", "Dynatrace", "Prometheus", "Grafana"],
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
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center text-white text-6xl shadow-inner">
                {project.image}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
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
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-lg transition-all duration-300 transform hover:shadow-lg"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Source
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
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3}
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
                    Demo
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
