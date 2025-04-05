import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import Projects from './Projects'
import Tools from './Tools'
import Experience from './Experience'
import ContactPage from './Contact'
import { MyContext } from './Context'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
    const { setActiveBar } = useContext(MyContext);
  
  const handleViewResume = () => {
    window.open('../public/rinsha_mernstack_resume.pdf', '_blank'); // Replace with your resume path
  };
  return (
    <div className="bg-[#352F44] text-[#FAF0E6]">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        variants={sectionVariants}
      >
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#B9B4C7] rounded-full opacity-10"></div>
          <div className="absolute top-20 right-0 w-20 h-20 bg-[#5C5470] rounded-full opacity-20"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Transforming Ideas into <br /> Scalable{' '}
              <span className="text-[#B9B4C7]">Web Solutions</span>
            </h1>
            <div className="w-24 h-1 bg-[#B9B4C7] mt-6 mb-6"></div>
            <p className="text-lg text-[#FAF0E6] mt-4 max-w-3xl">
              Passionate about building dynamic and user-friendly web applications. 
              I specialize in turning innovative ideas into full-stack solutions using 
              MongoDB, Express.js, React, and Node.js, delivering seamless and responsive user experiences.
            </p>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="bg-gradient-to-r from-[#5C5470] to-[#B9B4C7] text-[#FAF0E6] py-3 px-8 rounded-full font-medium mr-4 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewResume}
              >
                View Resume
              </motion.button>
              
              <motion.button
                className="border-2 border-[#B9B4C7] text-[#FAF0E6] py-3 px-8 rounded-full font-medium shadow-lg hover:bg-[#5C5470] hover:border-[#5C5470] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=>setActiveBar("contact")}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className=""
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Projects />
      </motion.section>

      {/* Tools Section */}
      <motion.section
        className=" "
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Tools />
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className=" "
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Experience />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className=" bg-[#352F44]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <ContactPage />
      </motion.section>
    </div>
  )
}