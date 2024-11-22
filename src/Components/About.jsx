import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-6 py-12">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Profile Picture Section */}
        <div className="flex-shrink-0 text-center md:text-left mt-10">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGE0EperXRgwg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698957525843?e=1736985600&v=beta&t=M-EZ-HNGJM-eG6JCZmiMmwg-uWTvClVC4Y66aQhCYQk"
            alt="Santosh Sai Gowtham Pasala"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col space-y-8 md:space-y-12">
          {/* About Me */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              I am an experienced Full-Stack Developer skilled in front-end technologies like React, 
              TypeScript, and Angular, and backend tools such as Node.js, Express, and databases 
              like MySQL and MongoDB. I am proficient in cloud infrastructure with AWS, 
              CI/CD pipelines, and DevOps practices using Docker and Kubernetes. 
              I excel at building scalable, user-centric applications and integrating APIs 
              to streamline processes. I am known for strong collaboration, problem-solving, 
              and a passion for leveraging technology to deliver impactful solutions.
            </p>
          </div>

          {/* Highlights Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Highlights from My Tech Stack</h3>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-lg space-y-3">
              <li>Developed and maintained full-stack applications using React.js, Node.js, and Express.js.</li>
              <li>Implemented cloud-based solutions with AWS Lambda, Terraform, EC2, IAM, and DynamoDB.</li>
              <li>Proficient in containerization and orchestration using Docker and Kubernetes.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
