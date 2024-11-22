import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { NavLink} from 'react-router-dom'
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const Home = () => {
  const name = "Santosh Sai Gowtham Pasala";
  const roles = ["Full-Stack Developer", "Software Programmer", "Cloud Enthusiast"];

  return (
    <>
    <div
      id="home"
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `
        url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      <div className="text-center px-6 md:px-12">
        <h1 className="font-extralight text-5xl sm:text-6xl md:text-8xl mb-6 
        text-gray-700">{name}</h1>
        <div className="text-3xl sm:text-4xl md:text-5xl
        flex items-center justify-center font-normal text-gray-600">
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
              href="https://www.linkedin.com/in/santoshsaigowtham/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/pssgowtham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="/santoshsaigowtham_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-red-600 text-4xl"
            >
              <FaFilePdf />
            </a>
          </div>
      </div>
    </div>
  </>
  );
};

export default Home;
