import React from 'react';

const Skills = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-11/12 max-w-screen-md bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/600" // Replace with your desired skills-related image
            alt="Skills"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Skills Section */}
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
          <ul className="mt-4 text-gray-600 list-disc pl-5">
            <li>C++</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>Spring Boot</li>
            <li>Docker & Kubernetes</li>
            <li>Cloud Services (AWS, GCP)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
