"use client";

import { Code, Palette, Smartphone, Globe } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces with attention to detail."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive",
      description: "Creating seamless experiences across all devices and screen sizes."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Modern Web",
      description: "Building fast, secure, and SEO-optimized web applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Site Reliability / DevOps Engineer passionate about automating infrastructure and ensuring system reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-400 to-blue-500 rounded-2xl p-8 flex items-center justify-center text-white text-8xl">
              🚀
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Automating Infrastructure at Scale
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I&apos;m a Site Reliability / DevOps Engineer with 3.5 years of experience at Tata Consultancy Services (TCS), 
              specializing in AWS infrastructure automation, CI/CD pipeline optimization, and containerized application deployment. 
              I excel at reducing MTTR through proactive monitoring and automation.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              My expertise spans across Terraform infrastructure provisioning, Kubernetes orchestration, 
              and building robust monitoring solutions. I&apos;m passionate about GitOps methodologies and 
              ensuring system reliability through observability and incident management.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["AWS", "Terraform", "Kubernetes", "Docker", "Python", "GitOps"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
