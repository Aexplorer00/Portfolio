"use client";

import { Download, ExternalLink } from "lucide-react";

export default function ResumeSection() {
  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume & CV
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download my complete resume or view it online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* PDF Download */}
          <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">PDF Download</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Download complete resume as PDF</p>
            <button
              onClick={() => handleDownload('/Portfolio/Laxmi_Prasad_Dooda_DevOps_Resume.pdf')}
              className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Download size={16} className="mr-2" />
              Download PDF
            </button>
          </div>

          {/* Online View */}
          <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Online View</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">View resume in browser</p>
            <button
              onClick={() => handleDownload('/Portfolio/resume.html')}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink size={16} className="mr-2" />
              View Online
            </button>
          </div>

          {/* GitHub Direct */}
          <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">GitHub Direct</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Direct link from repository</p>
            <button
              onClick={() => handleDownload('https://raw.githubusercontent.com/Aexplorer00/Portfolio/main/public/Laxmi_Prasad_Dooda_DevOps_Resume.pdf')}
              className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink size={16} className="mr-2" />
              Direct Link
            </button>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Resume Summary</h3>
          
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">LAXMI PRASAD DOODA</h4>
              <p className="text-lg text-primary-600 dark:text-primary-400">Site Reliability Engineer • DevOps Engineer</p>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="mailto:doodalakshmiprasad@gmail.com" className="hover:text-primary-600">doodalakshmiprasad@gmail.com</a> • 
                7702932805 • 
                <a href="https://linkedin.com/in/laxmi-prasad-d" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">LinkedIn</a> • 
                <a href="https://github.com/Aexplorer00" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">GitHub</a>
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Summary</h5>
              <p className="text-gray-600 dark:text-gray-400">
                Site Reliability / DevOps Engineer with 3.5 years of experience automating infrastructure, implementing CI/CD, 
                and deploying scalable applications on AWS. Proficient in Terraform, Docker, and monitoring tools. 
                Passionate about GitOps, cloud automation, and ensuring system reliability.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Current Role</h5>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Site Reliability Engineer — DevOps Engineer</strong> at <strong>Tata Consultancy Services (TCS)</strong><br />
                Jan 2022 – Present • Hyderabad, India
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h5>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Python', 'GitHub Actions', 'GitLab CI/CD', 'CloudWatch', 'Dynatrace'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
