import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const Home = () => {
  const name = "Santosh Sai Gowtham Pasala";
  const roles = ["Full-Stack Developer", "Software Programmer", "Cloud Enthusiast"];
  const [isVisible, setIsVisible] = React.useState(false);

  // Simulate page load animation
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay to ensure smooth entry
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transform transition-opacity duration-1000 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
    }`}>
    <div
      id="home" 
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-light-bg dark:bg-dark-bg"
    >
      <div className="px-6 md:px-12">
        <h1 className="text-center lg:text-left text-5xl md:font-light font-light sm:text-4xl md:text-5xl mb-8 
        text-gray-700 dark:text-gray-100">Hello, I'm</h1>
        <h1 className="text-center font-extralight text-5xl sm:text-6xl md:text-8xl mb-6 
        text-gray-700 dark:text-gray-100">{name}</h1>
        <div className="text-3xl sm:text-4xl md:text-5xl
        flex items-center justify-center font-normal text-gray-600 dark:text-gray-100">
          <span>I&apos;m&nbsp;</span>
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        
  <div className="flex justify-center space-x-6 mt-10">
            <a
              href="mailto:psantoshsaigowtham@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-100 hover:text-red-600 text-4xl"
            >
              <SiGmail />

            </a>
            <a
              href="https://www.linkedin.com/in/santoshsaigowtham/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-100 hover:text-blue-600 text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/pssgowtham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-100 hover:text-gray-900 text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="/santoshsaigowtham_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-100 hover:text-red-600 text-4xl"
            >
              <FaFilePdf />
            </a>
          </div>
      </div>
      
    </div>
    
  </div>
  );
};

export default Home;
