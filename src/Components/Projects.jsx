import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Airport Management System",
      link: "https://github.com/pssgowtham/Airport-management-system",
      description: [
        "Designed a full-stack Airport Management System using ReactJS, Node.js, and MySQL on AWS RDS.",
        "Achieved 99.5% uptime with autoscaling features and optimized page load times by 40%.",
        "Deployed the application on Amazon EC2 with autoscaling and load balancing for high availability.",
      ],
      technologies: ["ReactJS", "Node.js", "MySQL", "AWS EC2", "Autoscaling"],
    },
    {
      title: "Fitness Club Web Application",
      link: "https://github.com/pssgowtham/Fitness-Club-Web-Application",
      description: [
        "Spearheaded a user-centric fitness app using MEAN stack, enhancing user engagement by 30%.",
        "Implemented Angular services and controllers to manage functionalities for blogs, activities, and courses.",
        "Integrated AWS CloudFront for faster content delivery, improving load times by 20%.",
      ],
      technologies: ["Angular", "MongoDB", "Node.js", "AWS CloudFront"],
    },
    {
      title: "Survey on the Performance of VAD Models",
      link: "https://github.com/pssgowtham/A-Survey-on-the-Accuracy-and-Performance-of-Video-Anomaly-Detection-Models",
      description: [
        "Assessed and updated various anomaly detection models, leading to a 10% improvement in model selection accuracy.",
        "Benchmarked algorithms by comparing accuracy and computational efficiency, providing insights into trade-offs.",
        "Determined AI-VAD as the most accurate model based on comprehensive benchmarking results.",
      ],
      technologies: ["AI", "Python", "Machine Learning", "VAD"],
    },
    {
      title: "Intelligent Virtual Personal Assistant",
      link: "https://github.com/pssgowtham/Intelligent-Virtual-Personal-Assistant-Comprosing-Disease-Forecasting",
      description: [
        "Developed an application on Windows OS using Natural Language Processing (NLP) to handle voice-commanded tasks.",
        "Designed the GUI using Python, integrating AI for task automation based on trained data patterns.",
        "Implemented modules for calendar scheduling, email handling, and web search tasks.",
      ],
      technologies: ["Python", "NLP", "GUI Design", "AI"],
    },
    {
      title: "Credit Card Fraud Detection Using Historical Data",
      link: "https://github.com/pssgowtham/Credit-Card-Fraud-Detection",
      description: [
        "Led a team in deploying a Machine Learning Application for Credit Card Fraud Detection using the K Nearest Neighbor algorithm.",
        "Enhanced the accuracy of fraud detection to 96.8% through feature engineering and hyperparameter tuning.",
        "Deployed the model using Python, achieving robust performance on historical fraud datasets.",
      ],
      technologies: ["Python", "KNN Algorithm", "Machine Learning"],
    },
  ];

  return (
    <div className="min-h-screen font-serif flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-6 py-12">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-16 text-center font-serif tracking-wide">
          Projects Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Project Header */}
              <div className="bg-indigo-400 text-white p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <ul className="space-y-2 text-gray-700 text-sm">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-indigo-500 font-bold">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="text-gray-800 font-semibold text-sm mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer with Links */}
              <div className="p-4 bg-gray-50 flex items-center justify-between">
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition"
                >
                  <FaGithub />
                  GitHub Repo
                </button>
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
