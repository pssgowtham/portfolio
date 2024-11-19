import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { NavLink} from 'react-router-dom'

const Home = () => {
  const name = "Santosh Sai Gowtham Pasala";
  const roles = ["Full-Stack Developer", "Software Programmer", "Cloud Enthusiast"];

  return (
    <>
    <div
      id="home"
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="text-center px-6 md:px-12">
        <h1 className="font-extralight text-5xl sm:text-6xl md:text-8xl mb-6 
        text-white">{name}</h1>
        <div className="text-3xl sm:text-4xl md:text-5xl
        flex items-center justify-center font-normal text-white">
          <span>I&apos;m&nbsp;</span>
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mt-14">
    <NavLink to="/About" smooth={true} duration={500} className="text-xl text-white hover:text-gray-200 cursor-pointer">
    Click here to know more about me
    </NavLink>
  </div>
      </div>
    </div>
  </>
  );
};

export default Home;
