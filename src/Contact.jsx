import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('Sending...');

    // Environment variables
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'rinshajouhar5181@gmail.com',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSubmitStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmitStatus('Failed to send message. Please try again.');
      });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className='bg-gray-300 rounded-lg'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="p-28 flex justify-center items-center">
        <div className="w-full max-w-xl">
          <motion.h1
             className="text-4xl sm:text-6xl font-bold leading-tight "
            variants={itemVariants}
          >
            Let's Create Something <span className="text-purple-500">Amazing</span>
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-gray-800 text-white p-3 rounded-lg border-none focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your@email.com"
                className="w-full bg-gray-800 text-white p-3 rounded-lg border-none focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-800 text-white p-3 rounded-lg border-none focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Send
            </motion.button>

            {submitStatus && (
              <motion.div
                className={`mt-4 text-center ${
                  submitStatus.includes('successfully') 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                variants={itemVariants}
              >
                {submitStatus}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
