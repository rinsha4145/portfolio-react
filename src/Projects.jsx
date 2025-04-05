import React, { useContext, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MyContext } from './Context';
import ProjectDetail from './ProjectDetail';

export default function Projects() {
 const [selectedProject, setSelectedProject] = useState(null);

  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration built with MERN stack.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      githubUrl: "https://github.com/rinsha4145/PET-SHOP-FRONTEND",
      liveUrl: "",
      slug: "ecommerce-platform",
      image:"/pet.jpg"
    },
    {
      id: 2,
      title: "Pinterest Cloning",
      description: "A fully functional Pinterest clone built with the MERN stack, featuring pin creation, image uploads, custom boards, and a responsive masonry layout.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
      githubUrl: "https://github.com/rinsha4145/Pinterest-cloning",
      liveUrl: "https://pinterest-cloning-lovat.vercel.app/",
      slug: "pinterest-clone",
      image: "/pinterest.png"
    },
    {
      id: 3,
      title: "Findly – Job Search Platform",
      description: "A feature-rich job search platform built with Next.js and TypeScript, offering a scalable, type-safe, and SEO-optimized experience for job seekers and employers.",
      technologies: ["Next.js", "TypeScript", "Socket.IO", "Redux Toolkit", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/rinsha4145/findly_clientside", // Replace with actual GitHub URL
      liveUrl: "https://your-findly-platform.vercel.app", // Replace with actual live URL
      slug: "findly-job-platform",
      image: "https://your-image-link.com/findly-preview.png", // Replace with actual image link
    },
    // {
    //   id: 4,
    //   title: "Social Media Dashboard",
    //   description: "A comprehensive dashboard for monitoring social media metrics and engagement across multiple platforms.",
    //   technologies: ["React", "Chart.js", "Firebase", "Material UI"],
    //   githubUrl: "https://github.com/yourusername/social-dashboard",
    //   liveUrl: "https://your-social-dashboard.com",
    //   slug: "social-media-dashboard",
    //   image:""
    // }
  ];

 
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    {selectedProject ? (<div>
      <ProjectDetail selectedProject={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>):(
    
    <motion.div 
      className="py-16 px-8 bg-[#352F44]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl sm:text-6xl font-bold leading-tight text-[#FAF0E6] mb-16"
        variants={titleVariants}
      >
        Recent Projects <br/>and <span className="text-[#B9B4C7]">Achievements</span>
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {projectsData.map(project => (
          <motion.div 
            key={project.id} 
            className="bg-[#5C5470] rounded-xl overflow-hidden shadow-lg cursor-pointer"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
            }}
            
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image Placeholder - Replace with actual project images */}
            <motion.div 
  className="h-56 bg-[#B9B4C7] flex items-center justify-center relative overflow-hidden"
  whileHover={{ 
    backgroundColor: "#a8a2b8",
    transition: { duration: 0.2 }
  }}
>
  {/* Image container */}
  <img 
    src={project.image} 
    alt='image' 
    className='w-full h-full object-cover absolute top-0 left-0 opacity-80'
  />

  {/* Text overlay */}
  
</motion.div>


            <div className="p-6">
              <motion.h3 
                className="text-xl font-bold text-[#FAF0E6] mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p 
                className="text-[#FAF0E6] mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="px-3 py-1 text-sm bg-[#352F44] text-[#FAF0E6] rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))} */}
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={(e) => e.stopPropagation()} // Prevent card navigation when clicking buttons
              >
                <motion.a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#352F44] hover:bg-[#B9B4C7] text-[#FAF0E6] hover:text-[#352F44] py-2 px-4 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  <span>Repository</span>
                </motion.a>
                <motion.a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#352F44] hover:bg-[#B9B4C7] text-[#FAF0E6] hover:text-[#352F44] py-2 px-4 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
      )}
      </>
  );
}