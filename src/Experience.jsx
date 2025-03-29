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
    <motion.div
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="font-sans text-[#EEEEEE] text-7xl"
        variants={itemVariants}
      >
        Internship <span className="text-[#76ABAE]">Experience</span>
      </motion.h1>

      {experiences.map((exp, index) => (
        <motion.div key={index} className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-semibold">{exp.title}</h2>
          <p className="text-yellow-400 mb-4">{exp.duration}</p>
          <ul className="list-disc list-inside space-y-2">
            {exp.details.map((detail, i) => (
              <motion.li key={i} variants={itemVariants}>
                {detail}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Experience
