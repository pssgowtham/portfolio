import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-100">
      <div className="mx-auto font-serif w-full max-w-screen-xl p-6">
        {/* Contact Section */}
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-600">Get in Touch</h2>
          <p className="text-gray-400 text-sm mb-6">
            Feel free to reach out anytime! Whether you have a question or just want to say hello, I'll get back to you ASAP!
          </p>
          <a
            href="mailto:psantoshsaigowtham@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 
                       font-medium text-sm rounded-full bg-gradient-to-r 
                       from-teal-500 to-blue-500 text-white hover:from-teal-400 
                       hover:to-blue-400 transition duration-300 shadow-lg"
          >
            Email me
          </a>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700 sm:mx-auto lg:my-10" />

        {/* Footer Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between mt-8 mb-4">
          {/* Copyright */}
          <span className="text-sm text-gray-400 sm:text-center">
            © 2024
            <a
              href="https://pssgowthamportfolio.netlify.app/"
              className="hover:underline ml-1 text-teal-400 hover:text-teal-300 transition-colors"
            >
              pssgowtham
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Links */}
          <div className="flex mt-4 space-x-6 sm:justify-center sm:ml-5 sm:mt-0">
            <a
              href="mailto:psantoshsaigowtham@gmail.com"
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              <SiGmail className="w-6 h-6" />
              <span className="sr-only">Gmail</span>
            </a>
            <a
              href="http://www.linkedin.com/in/santoshsaigowtham"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/pssgowtham"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-400 transition-colors"
            >
              <FaDiscord className="w-6 h-6" />
              <span className="sr-only">Discord</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
