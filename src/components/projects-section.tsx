"use client";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in DevOps and Cloud Engineering
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4 text-center">🏗️</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Infrastructure Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Terraform modules for AWS infrastructure provisioning with 95% deployment success rate
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">Terraform</span>
              <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">AWS</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4 text-center">🌐</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Multi-Region Deployment
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Architected high-availability deployments across 3 AWS regions with 99.9% uptime
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">GitLab CI/CD</span>
              <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">Route 53</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
