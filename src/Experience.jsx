import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'INTERN, BRIDGEON SOLUTIONS',
      duration: 'Aug 2024 - Present',
      details: [
        'Assisted in the development of web applications using React.js and Redux.',
        'Gained hands-on experience in building and integrating RESTful APIs with Node.js and MongoDB.',
        'Collaborated with a team of developers to design and implement efficient user interfaces and improve application performance.',
        'Developed features such as form validation, state management, and dynamic content rendering.',
        'Participated in code reviews and debugging sessions to ensure code quality and maintainability.',
        'Gained exposure to agile methodologies, version control (Git), and continuous integration practices.',
      ],
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.section
      className="py-16 max-w-4xl mx-auto px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ backgroundColor: '#352F44' }}
    >
      {/* Section Header */}
      <motion.div className="mb-5 " variants={itemVariants}>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-[#FAF0E6]">
          Internship <span className="text-[#B9B4C7]">Experience</span>
        </h1>
  
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="mb-12 relative" 
            variants={itemVariants}
          >
            {/* Timeline Line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-0 top-8 w-1 h-full bg-[#B9B4C7] opacity-30"></div>
            )}
            
            {/* Experience Card */}
            <div className=" rounded-lg p-6  ">
              {/* Header */}
              <div className="mb-4 border-b border-[#352F44] pb-4">
                <h2 className="text-2xl font-semibold text-[#B9B4C7]">{exp.title}</h2>
                <p className="text-[#FAF0E6] mt-1">{exp.duration}</p>
              </div>
              
              {/* Details */}
              <div className="text-[#FAF0E6]">
                <h3 className="text-lg font-medium mb-3">Key Responsibilities & Achievements:</h3>
                <ul className="space-y-3">
                  {exp.details.map((detail, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-[#B9B4C7] mt-2 mr-3 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Experience Button (for future expansion) */}
      {/* <motion.div className="text-center mt-8" variants={itemVariants}>
        <p className="text-[#B9B4C7] italic">More professional experiences coming soon...</p>
      </motion.div> */}
    </motion.section>
  )
}

export default Experience