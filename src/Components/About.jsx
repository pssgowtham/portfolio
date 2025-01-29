import React from 'react';
function About() {
  const [isVisible, setIsVisible] = React.useState(false);

  // Simulate page load animation
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay to ensure smooth entry
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
    className={`min-h-screen flex font-serif items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200  dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-6 py-12 
      transform transition-opacity duration-1000 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
    }`}>
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-10">
        {/* Profile Picture Section */}
        <div className="flex-shrink-0 text-center md:text-left mt-10">
          <img
            src="profile pic.png"
            alt="Santosh Sai Gowtham Pasala"
            className="w-60 mt-10 h-60 md:w-72 md:h-72 rounded-full border-2 border-red-700 dark:border-red-700 shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col space-y-8 md:space-y-12">
          {/* About Me */}
          <div>
          <h2 className="text-5xl font-extrabold text-gray-700 dark:text-red-700 mb-16 text-center font-serif tracking-wide">
          About Me
        </h2>
            <p className="mt-4 text-lg font-serif text-gray-600  dark:text-gray-300 leading-relaxed">
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
            <h3 className="text-2xl font-serif font-semibold text-gray-700 dark:text-gray-200">Highlights from My Tech Stack</h3>
            <ul className="mt-4 font-serif list-disc list-inside text-gray-600 dark:text-gray-300 text-lg space-y-3">
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
