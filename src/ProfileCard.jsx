import React from 'react';
import {   FaEnvelope,FaLinkedin,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
 import image from "../public/image.jpg"
const ProfileCard = () => {
    const handleViewResume = () => {
        window.open('../public/rinsha_mernstack_resume.pdf', '_blank'); 
      };
      const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "../public/rinsha_mernstack_resume.pdf"; // Path to your resume in the public folder
        link.download = "rinsha_mernstack_resume.pdf"; // Desired file name for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
  onClick={handleDownloadResume}
  className="w-full flex items-center justify-center gap-2 bg-purple-600 mt-4 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
>
  Download CV
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
</button>
      </div>
    </div>
  );
};

export default ProfileCard;