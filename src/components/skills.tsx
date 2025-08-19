"use client";

export default function Skills() {
  const skillCategories = [
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Terraform", level: 88 },
        { name: "CloudFormation", level: 80 },
        { name: "Boto3", level: 85 },
        { name: "EC2/S3/RDS", level: 92 },
      ]
    },
    {
      category: "DevOps & CI/CD",
      skills: [
        { name: "GitHub Actions", level: 90 },
        { name: "GitLab CI/CD", level: 85 },
        { name: "AWS CodePipeline", level: 88 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes (EKS)", level: 80 },
      ]
    },
    {
      category: "Monitoring & Tools",
      skills: [
        { name: "CloudWatch", level: 90 },
        { name: "Dynatrace", level: 85 },
        { name: "Prometheus", level: 75 },
        { name: "Python", level: 88 },
        { name: "Shell Scripting", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-justify">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 shadow-inner">
                      <div
                        className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                AWS Services Managed
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                3.5+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Infrastructure Deployments
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
