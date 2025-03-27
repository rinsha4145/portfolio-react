import React from 'react';
import {   FaEnvelope,FaLinkedin,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
 import image from "../public/image.jpg"
const ProfileCard = () => {
    const handleViewResume = () => {
        window.open('../public/Rinsha k.pdf', '_blank'); // Replace with your resume path
      };
  return (
    <div className="bg-gray-900 w-80 rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute inset-0 bg-purple-700 opacity-30"></div>
        <img 
          src={image} 
          alt="Profile" 
          className="w-full h-80 object-fit"
        />
      </div>
      
      <div className="p-6 text-center">
        <h2 className=" text-4xl font-bold mb-2">Rinsha k</h2>
        <p className=" text-md mb-2">MernStack Developer</p>
        <p className="text-md mb-6">Calicut, Kerala</p>
        
        <div className="flex justify-center space-x-4 mb-6">
        <a href="https://www.linkedin.com/in/rinsha-k-6418b8233/" target="_blank" className=" hover:text-white text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/rinsha5181/" className=" hover:text-white text-2xl">
            <SiLeetcode />
          </a>
          <a href="https://github.com/rinsha4145" className=" hover:text-white text-2xl">
            <FaGithub />
          </a>
          <a href="mailto:rinshajouhar5181@gmail.com" className=" hover:text-white text-2xl">
            <FaEnvelope />
          </a>
        </div>
        
        <button
      onClick={handleViewResume}
      className="w-full bg-purple-600 mt-15 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
    >
      View Resume
    </button>
      </div>
    </div>
  );
};

export default ProfileCard;