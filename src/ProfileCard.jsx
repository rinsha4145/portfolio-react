import React from 'react';
import {   FaEnvelope,FaLinkedin,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const ProfileCard = () => {
  return (
    <div className="bg-gray-900 w-80 rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute inset-0 bg-purple-700 opacity-30"></div>
        <img 
          src="/api/placeholder/320/400" 
          alt="Profile" 
          className="w-full h-80 object-cover"
        />
      </div>
      
      <div className="p-6 text-center">
        <h2 className="text-white text-2xl font-bold mb-2">Aabrahams James</h2>
        <p className="text-gray-400 mb-4">Product Designer & Developer</p>
        <p className="text-gray-500 mb-6">Istanbul, Turkey</p>
        
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaEnvelope size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <SiLeetcode size={24} />
          </a>
        </div>
        
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;