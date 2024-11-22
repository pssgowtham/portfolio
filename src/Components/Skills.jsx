import React, { useEffect, useState } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  // Simulate page load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay to ensure smooth entry
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-6 py-12 transform transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Skills List Section */}
        <div className="flex flex-col space-y-8 md:space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 animate-fadeInUp">Skills</h2>
          </div>

          {/* Languages & Web Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Languages & Web Technologies</h3>
            <div className="flex flex-wrap gap-6 mt-2">
              {[
                { src: "c++.png", alt: "C++", label: "C++" },
                { src: "java.png", alt: "Java", label: "Java" },
                { src: "python.png", alt: "Python", label: "Python" },
                { src: "html.png", alt: "HTML", label: "HTML" },
                { src: "css.png", alt: "CSS", label: "CSS" },
                { src: "javascript.png", alt: "JavaScript", label: "JavaScript" },
                { src: "typescript.png", alt: "TypeScript", label: "TypeScript" },
                { src: "tailwindcss.png", alt: "Tailwind CSS", label: "Tailwind CSS" },
                { src: "redux.png", alt: "Redux", label: "Redux" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`group w-24 h-24 flex flex-col items-center transform transition-all duration-500 ease-in-out delay-${
                    index * 100
                  } hover:scale-110 opacity-0 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
                >
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition duration-300">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Frameworks</h3>
            <div className="flex flex-wrap gap-6 mt-2">
              {[
                { src: "flask.png", alt: "Flask", label: "Flask" },
                { src: "react.png", alt: "React", label: "React" },
                { src: "angular.png", alt: "Angular", label: "Angular" },
                { src: "expressjs.png", alt: "Express.js", label: "Express.js" },
                { src: "nodejs.png", alt: "Node.js", label: "Node.js" },
                { src: "nextjs.png", alt: "Next.js", label: "Next.js" },
                { src: "spring.png", alt: "Spring MVC", label: "Spring MVC" },
                { src: "junit.png", alt: "JUnit", label: "JUnit" },
              ].map((framework, index) => (
                <div
                  key={index}
                  className={`group w-24 h-24 flex flex-col items-center transform transition-all duration-500 ease-in-out delay-${
                    index * 100
                  } hover:scale-110 opacity-0 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
                >
                  <img
                    src={framework.src}
                    alt={framework.alt}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition duration-300">
                    {framework.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Add other sections following the same structure */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Databases & Cloud Technologies</h3>
            <div className="flex flex-wrap gap-6 mt-2">
              {[
                { src: "mysql.png", alt: "MySQL", label: "MySQL" },
                { src: "mongodb.png", alt: "MongoDB", label: "MongoDB" },
                { src: "dynamodb.png", alt: "DynamoDB", label: "DynamoDB" },
                { src: "gcp.png", alt: "Google Cloud", label: "Google Cloud" },
                { src: "aws.png", alt: "AWS", label: "AWS" },
                { src: "lamda.png", alt: "AWS Lambda", label: "AWS Lambda" },
                { src: "kafka.png", alt: "Kafka", label: "Kafka" },
                { src: "docker.png", alt: "Docker", label: "Docker" },
                { src: "kubernates.png", alt: "Kubernetes", label: "Kubernetes" },
              ].map((framework, index) => (
                <div
                  key={index}
                  className={`group w-24 h-24 flex flex-col items-center transform transition-all duration-500 ease-in-out delay-${
                    index * 100
                  } hover:scale-110 opacity-0 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
                >
                  <img
                    src={framework.src}
                    alt={framework.alt}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition duration-300">
                    {framework.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Software Tools & Technologies</h3>
            <div className="flex flex-wrap gap-6 mt-2">
              {[
                { src: "git.png", alt: "Git", label: "Git" },
                { src: "jira.png", alt: "JIRA", label: "JIRA" },
                { src: "linux.png", alt: "Linux", label: "Linux" },
                { src: "maven.png", alt: "Maven", label: "Maven" },
                { src: "powerbi.png", alt: "Power BI", label: "Power BI" },
                { src: "tableau.png", alt: "Tableau", label: "Tableau" },
                { src: "spark.png", alt: "Spark", label: "Spark" },
                { src: "postman.png", alt: "Postman", label: "Postman" },
                { src: "swagger.png", alt: "Swagger", label: "Swagger/Open API" },
              ].map((framework, index) => (
                <div
                  key={index}
                  className={`group w-24 h-24 flex flex-col items-center transform transition-all duration-500 ease-in-out delay-${
                    index * 100
                  } hover:scale-110 opacity-0 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
                >
                  <img
                    src={framework.src}
                    alt={framework.alt}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition duration-300">
                    {framework.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
