import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaJs, FaDatabase } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiRedux, SiTailwindcss, SiExpress, SiAxios, SiSocketdotio } from "react-icons/si";

// Memoized ToolCard to prevent unnecessary re-renders
const ToolCard = memo(({ icon, name, description, link }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#5C5470] rounded-xl p-5 flex cursor-pointer items-center space-x-4 hover:bg-[#4A4359] border-l-4 border-[#B9B4C7] shadow-lg"
    onClick={() => window.open(link, '_blank')}
  >
    <div className="bg-[#352F44] p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="text-[#FAF0E6] font-semibold text-lg">{name}</h3>
      <p className="text-[#B9B4C7] text-sm">{description}</p>
    </div>
  </motion.div>
));

const Tools = () => {
  const tools = [
    { 
      name: 'React', 
      description: 'JavaScript Library for UI', 
      icon: <FaReact className="text-blue-500 w-6 h-6" />, 
      link: 'https://react.dev/' 
    },
    { 
      name: 'Next.js', 
      description: 'React Framework', 
      icon: <TbBrandNextjs className="text-[#FAF0E6] w-6 h-6" />, 
      link: 'https://nextjs.org/' 
    },
    { 
      name: 'Figma', 
      description: 'Design Tool', 
      icon: <FaFigma className="text-pink-500 w-6 h-6" />, 
      link: 'https://www.figma.com/' 
    },
    { 
      name: 'JavaScript', 
      description: 'Programming Language', 
      icon: <FaJs className="text-yellow-400 w-6 h-6" />, 
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' 
    },
    { 
      name: 'TypeScript', 
      description: 'Typed JavaScript', 
      icon: <SiTypescript className="text-blue-600 w-6 h-6" />, 
      link: 'https://www.typescriptlang.org/' 
    },
    { 
      name: 'Redux', 
      description: 'State Management', 
      icon: <SiRedux className="text-purple-600 w-6 h-6" />, 
      link: 'https://redux.js.org/' 
    },
    { 
      name: 'HTML', 
      description: 'Markup Language', 
      icon: <FaHtml5 className="text-orange-500 w-6 h-6" />, 
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' 
    },
    { 
      name: 'CSS', 
      description: 'Style Sheet Language', 
      icon: <FaCss3Alt className="text-blue-400 w-6 h-6" />, 
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' 
    },
    { 
      name: 'Tailwind CSS', 
      description: 'CSS Framework', 
      icon: <SiTailwindcss className="text-teal-400 w-6 h-6" />, 
      link: 'https://tailwindcss.com/' 
    },
    { 
      name: 'Git', 
      description: 'Version Control System', 
      icon: <FaGitAlt className="text-red-500 w-6 h-6" />, 
      link: 'https://git-scm.com/' 
    },
    { 
      name: 'Node.js', 
      description: 'JavaScript Runtime', 
      icon: <FaNodeJs className="text-green-600 w-6 h-6" />, 
      link: 'https://nodejs.org/' 
    },
    { 
      name: 'Express.js', 
      description: 'Node.js Framework', 
      icon: <SiExpress className="text-[#FAF0E6] w-6 h-6" />, 
      link: 'https://expressjs.com/' 
    },
    { 
      name: 'MongoDB', 
      description: 'NoSQL Database', 
      icon: <FaDatabase className="text-green-500 w-6 h-6" />, 
      link: 'https://www.mongodb.com/' 
    },
    { 
      name: 'Axios', 
      description: 'HTTP Client', 
      icon: <SiAxios className="text-indigo-500 w-6 h-6" />, 
      link: 'https://axios-http.com/' 
    },
    { 
      name: 'Socket.IO', 
      description: 'Real-Time Communication', 
      icon: <SiSocketdotio className="text-[#FAF0E6] w-6 h-6" />, 
      link: 'https://socket.io/' 
    },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      prev < tools.length ? prev + 6 : 6
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      className="py-16 px-4" 
      style={{ backgroundColor: '#352F44' }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header with decorative elements */}
        <div className="relative mb-16 text-center">
          <motion.div 
            className="absolute -top-8 right-0 w-16 h-16 rounded-full bg-[#B9B4C7] opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-16 left-8 w-8 h-8 rounded-full bg-[#B9B4C7] opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold leading-tight text-[#FAF0E6]"
          >
            Top-Tier Tools for <br />
            <span className="text-[#B9B4C7]">Exceptional</span> Results
          </motion.h1>
          
          <div className="w-24 h-1 bg-[#B9B4C7] mx-auto mt-6"></div>
          <p className="text-[#B9B4C7] mt-6 max-w-lg mx-auto">
            A curated collection of advanced development tools I use to create modern, 
            responsive, and feature-rich applications.
          </p>
        </div>

        {/* Tool grid with improved layout */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
          variants={containerVariants}
        >
          {tools.slice(0, visibleCount).map((tool, index) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </motion.div>

        {/* Improved button with gradient effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={handleLoadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#5C5470] to-[#B9B4C7] text-[#FAF0E6] py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            {visibleCount < tools.length ? "Show More Tools" : "Show Less"}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Tools;