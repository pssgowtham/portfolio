import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Start fade-in when 50% of the section is visible
  });

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center min-h-screen bg-gray-100 transition-opacity duration-700 ease-in-out ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-11/12 max-w-screen-xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGE0EperXRgwg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698957525843?e=1736985600&v=beta&t=M-EZ-HNGJM-eG6JCZmiMmwg-uWTvClVC4Y66aQhCYQk"
            alt="Your photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Summary Section */}
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-gray-800">Santosh Sai Gowtham Pasala</h2>
          <p className="mt-4 text-xl text-gray-600">
            I am a Software Engineer specializing in full-stack development and cloud technologies,
            with a passion for creating robust, scalable applications. My expertise spans from building
            responsive front-end interfaces to designing efficient back-end systems and managing cloud
            infrastructure.
          </p>
        </div>
        <div className=" flex place-items-end lg:order-2 mb-5 mr-5">
            <Link
                to="/Skills"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
                Know about my Skills 
            </Link>
        </div>
      </div>
      
    </div>
  );
}

export default About;