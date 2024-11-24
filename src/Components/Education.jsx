import React, { useEffect, useState } from 'react';

const degrees = [
  {
    title: 'Masters of Science in Software Engineering',
    institution: 'San Jose State University',
    duration: 'August 2022 - May 2024',
    details:
      'Graduated with a grade of 3.53 / 4.0, specialized in cloud technologies and software engineering best practices.',
    coursework: "Software Systems Engineering, Enterprise Software Platforms, Enterprise Distributed Systems, Data Mining, Enterprise App Development, Software Quality Testing, Business Analytics and Big Data Analysis.",
      
  },
  {
    title: 'Bachelor of Technology in Computer Science',
    institution: 'VNR Vignana Jyothi Institute of Engineering & Technology',
    duration: 'August 2017 - May 2021',
    details:
      'Graduated with distinction, specialized in programming & web development, participated in coding hackathons, and led the student developer community.',
    coursework: 'C/C++ Programming, Python, Machine Learning, Artificial Intelligence, Cloud Computing, Object Oriented Programming, Data Structures, Big Data Analysis, Supervised learning Techniques, Cyber/Computer Security.',
  
  },
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    provider: 'Amazon Web Services',
    date: 'June 2023',
  },
  {
    title: 'Google Cloud Professional - Associate Cloud Engineer',
    provider: 'Google Cloud',
    date: 'December 2022',
  },
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay for smooth animation
    return () => clearTimeout(timer);
  }, []);

  const renderCard = (title, subtitle, details,coursework) => (
    <div
      className={`p-6 bg-white shadow-md rounded-lg transform transition-all duration-500 hover:scale-105 opacity-0 ${
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{subtitle}</p>
      {details && <p className="mt-2 text-sm text-gray-600">{details}</p>}
      {coursework && <p className="mt-2 text-sm text-gray-600"><b>Course Work: </b>{coursework}</p>}
    </div>
  );

  return (
    <div
      className={`min-h-screen flex font-serif items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-6 py-12 transform transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <div className="container mx-auto max-w-6xl flex flex-col items-center space-y-10">
        {/* Header */}
        <h2 className="text-5xl font-extrabold text-gray-800 mb-16 text-center font-serif tracking-wide">
          Education
        </h2>

        {/* Degrees Section */}
        <div className="w-full">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Degrees</h3>
          <div className="flex flex-col space-y-6">
            {degrees.map((degree, index) =>
              renderCard(degree.title, `${degree.institution} | ${degree.duration}`, degree.details, degree.coursework)
            )}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="w-full">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Certifications</h3>
          <div className="flex flex-col space-y-6">
            {certifications.map((cert, index) =>
              renderCard(cert.title, `${cert.provider} | ${cert.date}`)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
