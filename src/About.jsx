import React from 'react'
import Projects from './Projects'
import Tools from './Tools'
import Experience from './Experience'
import ContactPage from './Contact'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <div className="space-y-20">
      
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-white">
          Transforming Ideas into <br /> Scalable{' '}
          <span className="text-[#76ABAE]">Web Solutions</span>
        </h1>
        <p className="text-lg text-[#EEEEEE] mt-4">
          Passionate about building dynamic and user-friendly web applications. I specialize in turning innovative ideas into full-stack solutions using MongoDB, Express.js, React, and Node.js, delivering seamless and responsive user experiences.
        </p>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Projects />
      </motion.div>

      {/* Tools Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Tools />
      </motion.div>

      {/* Experience Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Experience />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <ContactPage />
      </motion.div>
    </div>
  )
}
