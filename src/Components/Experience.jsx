import React, { useEffect, useState } from 'react';
import { FaBuilding, FaClock } from 'react-icons/fa';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      role: "Software Engineer",
      company: "Bose Software Systems – Remote, USA",
      duration: "Jul 2024 – Present",
      details: [
        "Designed and maintained responsive web applications using the MERN stack, improving user engagement by 35%.",
        "Architected RESTful and GraphQL APIs, reducing response time by 40% and enhancing application performance.",
        "Implemented secure authentication and authorization protocols using JWT and OAuth2.",
        "Integrated MongoDB for scalable database management, optimizing query performance with 99.9% data availability.",
      ],
    },
    {
      role: "Software Analyst",
      company: "Deloitte – Hyderabad, India",
      duration: "Aug 2021 – Aug 2022",
      details: [
        "Developed robust front-end interfaces integrated with back-end services using React.js and Node.js.",
        "Reduced average application loading time by 1.5 seconds through code optimization.",
        "Orchestrated CI/CD pipelines with Jenkins, Docker, and Kubernetes, reducing downtime by 15%.",
      ],
    },
    {
      role: "Software Intern",
      company: "Deloitte – Hyderabad, India",
      duration: "Jan 2021 – May 2021",
      details: [
        "Crafted AWS services (S3, EC2, Athena, Redshift, VPC), cutting costs by 10%.",
        "Automated resource provisioning with AWS CloudFormation and Terraform, reducing manual intervention by 50%.",
        "Secured high availability of Amazon RDS and DynamoDB databases with 99.9% uptime.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "JPMC – Hyderabad, India",
      duration: "Jan 2020 – May 2020",
      details: [
        "Generated financial data feeds and developed interactive front-end web applications.",
        "Improved data integration accuracy by 25% and boosted user engagement by 30%.",
      ],
    },
  ];

  return (
    <div className="min-h-screen font-serif flex items-center justify-center bg-gradient-to-r from-blue-50 via-gray-100 to-indigo-100 px-6 py-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-16 text-center font-serif tracking-wide">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Vertical Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 via-indigo-300 to-indigo-100 h-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 transform transition-all duration-700 ease-in-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Circle Marker with Icon */}
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <FaBuilding className="text-white text-lg" />
                </div>

                {/* Content Box */}
                <div
                  className={`bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg transform ${
                    index % 2 === 0 ? "ml-10" : "mr-10"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {exp.role}
                  </h3>
                  <p className="flex items-center text-gray-600 text-sm mb-4">
                    <FaBuilding className="mr-2 text-indigo-400" /> {exp.company}
                  </p>
                  <p className="flex items-center text-gray-500 text-sm">
                    <FaClock className="mr-2 text-indigo-400" /> {exp.duration}
                  </p>
                  <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-600 text-sm">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
