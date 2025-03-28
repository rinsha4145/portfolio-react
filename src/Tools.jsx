import React, { useState, memo } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaJs, FaDatabase } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiRedux, SiTailwindcss, SiExpress, SiAxios, SiSocketdotio } from "react-icons/si";

// Memoized ToolCard to prevent unnecessary re-renders
const ToolCard = memo(({ icon, name, description,link }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#31363F] rounded-xl p-4 flex cursor-pointer items-center space-x-4 hover:bg-gray-700"
    onClick={() => window.open(link, '_blank')}
  >
    {icon}
    <div>
      <h3 className="text-white font-semibold">{name}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </motion.div>
));

const Tools = () => {
    const tools = [
        { 
          name: 'React', 
          description: 'JavaScript Library for UI', 
          icon: <FaReact className="text-blue-500 w-8 h-8" />, 
          link: 'https://react.dev/' 
        },
        { 
          name: 'Next.js', 
          description: 'React Framework', 
          icon: <TbBrandNextjs className="text-black w-8 h-8" />, 
          link: 'https://nextjs.org/' 
        },
        { 
          name: 'Figma', 
          description: 'Design Tool', 
          icon: <FaFigma className="text-pink-500 w-8 h-8" />, 
          link: 'https://www.figma.com/' 
        },
        { 
          name: 'JavaScript', 
          description: 'Programming Language', 
          icon: <FaJs className="text-yellow-400 w-8 h-8" />, 
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' 
        },
        { 
          name: 'TypeScript', 
          description: 'Typed JavaScript', 
          icon: <SiTypescript className="text-blue-600 w-8 h-8" />, 
          link: 'https://www.typescriptlang.org/' 
        },
        { 
          name: 'Redux', 
          description: 'State Management', 
          icon: <SiRedux className="text-purple-600 w-8 h-8" />, 
          link: 'https://redux.js.org/' 
        },
        { 
          name: 'HTML', 
          description: 'Markup Language', 
          icon: <FaHtml5 className="text-orange-500 w-8 h-8" />, 
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' 
        },
        { 
          name: 'CSS', 
          description: 'Style Sheet Language', 
          icon: <FaCss3Alt className="text-blue-400 w-8 h-8" />, 
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' 
        },
        { 
          name: 'Tailwind CSS', 
          description: 'CSS Framework', 
          icon: <SiTailwindcss className="text-teal-400 w-8 h-8" />, 
          link: 'https://tailwindcss.com/' 
        },
        { 
          name: 'Git', 
          description: 'Version Control System', 
          icon: <FaGitAlt className="text-red-500 w-8 h-8" />, 
          link: 'https://git-scm.com/' 
        },
        { 
          name: 'Node.js', 
          description: 'JavaScript Runtime', 
          icon: <FaNodeJs className="text-green-600 w-8 h-8" />, 
          link: 'https://nodejs.org/' 
        },
        { 
          name: 'Express.js', 
          description: 'Node.js Framework', 
          icon: <SiExpress className="text-gray-600 w-8 h-8" />, 
          link: 'https://expressjs.com/' 
        },
        { 
          name: 'MongoDB', 
          description: 'NoSQL Database', 
          icon: <FaDatabase className="text-green-500 w-8 h-8" />, 
          link: 'https://www.mongodb.com/' 
        },
        { 
          name: 'Axios', 
          description: 'HTTP Client', 
          icon: <SiAxios className="text-indigo-500 w-8 h-8" />, 
          link: 'https://axios-http.com/' 
        },
        { 
          name: 'Socket.IO', 
          description: 'Real-Time Communication', 
          icon: <SiSocketdotio className="text-black w-8 h-8" />, 
          link: 'https://socket.io/' 
        },
      ];
      

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto  ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold leading-tight text-white"
        >
          Top-Tier Tools for <br />
          <span className="text-amber-300">Exceptional</span> Results
        </motion.h1>

        <div className="grid   grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {tools.slice(0, visibleCount).map((tool) => (
            <ToolCard key={tool.name} {...tool}     />
          ))}
        </div>

        {visibleCount < tools.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={handleLoadMore}
              aria-label="Load more tools"
              className="bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tools;
