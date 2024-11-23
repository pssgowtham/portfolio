import React, { useEffect, useState } from 'react';

function Education() {
  const [isVisible, setIsVisible] = useState(false);

  // Simulate page load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay to ensure smooth entry
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex font-serif items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-6 py-12 
        transform transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <div className="container mx-auto max-w-6xl flex flex-col items-center space-y-10">
        {/* Header */}
        <h2 className="text-5xl font-extrabold text-gray-800 mb-16 text-center font-serif tracking-wide">
          Education
        </h2>

        {/* Degrees */}
        <div className="w-full">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Degrees</h3>
          <div className="flex flex-col space-y-6 mb-8">
            <div
              className={`p-6 bg-white shadow-md rounded-lg transform transition-all duration-500 hover:scale-105 opacity-0 ${
                isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
              }`}
            >
              <h4 className="text-lg font-semibold text-gray-800">
                Masters of Science in Software Engineering
              </h4>
              <p className="text-sm text-gray-600">
                San Jose State University | August 2022 - May 2024
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Key Achievements: Graduated with a grade of 3.53 / 4.0, specialized in cloud technologies and software engineering best practices.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div
              className={`p-6 bg-white shadow-md rounded-lg transform transition-all duration-500 hover:scale-105 opacity-0 ${
                isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
              }`}
            >
              <h4 className="text-lg font-semibold text-gray-800">
                Bachelor of Technology in Computer Science
              </h4>
              <p className="text-sm text-gray-600">
                VNR Vignana Jyothi Institute of Engineering & Technology | August 2017 - May 2021
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Key Achievements: Graduated with distinction, specialized in programming & web development, participated in coding hackathons, and led the student developer community.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="w-full">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Certifications
          </h3>
          <div className="flex flex-col space-y-6">
            {[
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
            ].map((cert, index) => (
              <div
                key={index}
                className={`p-6 bg-white shadow-md rounded-lg transform transition-all duration-500 hover:scale-105 opacity-0 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
                }`}
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {cert.provider} | {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        
      </div>
    </div>
  );
}

export default Education;
