import React from 'react';
import {   FaEnvelope,FaLinkedin,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
 import image from "../public/image.jpg"
const ProfileCard = () => {
    const handleViewResume = () => {
        window.open('../public/Rinsha k.pdf', '_blank'); 
      };
  return (
   
    <div className="bg-[#31363F] w-80  rounded-xl overflow-hidden shadow-lg">
      <div className="relative p-10">
        <div className="absolute  inset-0 bg-[#31363F] opacity-30"></div>
        <img 
          src={image} 
          alt="Profile" 
          className=" h-70 rounded-lg object-fit"
        />
      </div>
      
      <div className=" text-center">
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