import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectDetail = ({ selectedProject, onClose }) => {
  console.log(selectedProject);
  const [project, setProject] = useState(null);
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, and payment integration built with MERN stack.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      githubUrl: "https://github.com/yourusername/ecommerce-project",
      liveUrl: "https://your-ecommerce-site.com",
      slug: "ecommerce-platform",
      image: "./pet.jpg",

      challenge:
        "Creating a seamless shopping experience with real-time inventory management and secure payment processing.",
      solution:
        "Implemented Redux for state management, JWT for authentication, and integrated Stripe for payment processing. Used Socket.io for real-time inventory updates.",
      features: [
        "User authentication and profile management",
        "Product search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure checkout with Stripe",
        "Admin dashboard for product and order management",
      ],
      results:
        "Successfully launched the platform with over 1,000 products and integrated with warehouse management systems for automated inventory control.",
    },
    {
      id: 2,
      title: "Pinterest Clone",
      description: "A visually rich Pinterest-inspired web application where users can discover, save, and organize creative ideas.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
      githubUrl: "https://github.com/rinsha4145/Pinterest-cloning",
      liveUrl: "https://pinterest-cloning-lovat.vercel.app/",
      slug: "pinterest-clone",
      image: "./pinterest.png",
      challenge: "Creating a seamless and visually dynamic platform for pin creation, image uploads, and personalized boards with responsive masonry layouts.",
      solution: "Used Cloudinary for efficient image storage, implemented responsive masonry-style grids with Tailwind CSS, and built intuitive UI components for creating, organizing, and saving pins.",
      features: [
        "User authentication with email and Google OAuth",
        "Pin creation with title, description, and image upload",
        "Custom boards for organizing saved pins",
        "Like, comment, and save functionality",
        "Responsive masonry layout for dynamic content display"
      ],
      results: "Delivered a Pinterest-like experience with fast image loading, clean UI, and personalized boards, enhancing user engagement and content discovery."
    },
    
    {
      id: 3,
      title: "Findly – Job Search Platform",
      description: "A feature-rich job search platform built with Next.js and TypeScript, offering a scalable, type-safe, and SEO-optimized experience for job seekers and employers.",
      technologies: ["Next.js", "TypeScript", "Socket.IO", "Redux Toolkit", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/rinsha4145/findly_clientside", 
      liveUrl: "", 
      slug: "findly-job-platform",
      image: "", 
      challenge: "Building a high-performance job search app with real-time messaging, accurate filtering, and seamless state management while maintaining responsiveness and SEO compliance.",
      solution: "Utilized Next.js with server-side rendering for faster load times, integrated a RESTful API for dynamic content, and used Socket.IO for real-time chat between employers and applicants. State management was handled via Redux Toolkit for an optimized user experience.",
      features: [
        "SEO-optimized SSR with Next.js",
        "Real-time messaging with Socket.IO",
        "Advanced job filtering and categorization",
        "Secure user authentication system",
        "Responsive and accessible UI using Tailwind CSS",
        "Redux Toolkit for robust state management"
      ],
      results: "Enhanced user engagement by 65% through real-time communication and precise search filtering, resulting in faster job application turnaround and improved platform performance."
    }
    
    // {
    //   id: 4,
    //   title: "Social Media Dashboard",
    //   description:
    //     "A comprehensive dashboard for monitoring social media metrics and engagement across multiple platforms.",
    //   technologies: ["React", "Chart.js", "Firebase", "Material UI"],
    //   githubUrl: "https://github.com/yourusername/social-dashboard",
    //   liveUrl: "https://your-social-dashboard.com",
    //   slug: "social-media-dashboard",
    //   image: "",
    //   challenge:
    //     "Aggregating data from multiple social media APIs and presenting insights in an intuitive and actionable format.",
    //   solution:
    //     "Created a modular architecture for API integrations and used Chart.js for data visualization. Implemented Firebase for real-time data updates and user authentication.",
    //   features: [
    //     "Integration with Twitter, Instagram, and Facebook APIs",
    //     "Real-time engagement metrics",
    //     "Customizable dashboard widgets",
    //     "Scheduled reporting via email",
    //     "Competitor analysis tools",
    //   ],
    //   results:
    //     "Helped marketing teams optimize their social media strategies, resulting in an average 25% increase in engagement metrics for clients.",
    // },
  ];

  useEffect(() => {
  
    const foundProject = projectsData.find(
      (p) => p.slug === selectedProject.slug
    );

    if (foundProject) {
      setProject(foundProject);
    } else {  
      console.error("Project not found");
    }

   
  }, [selectedProject]);

  

  if (!project) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[#352F44]">
        <div className="text-[#FAF0E6] text-xl mb-4">Project not found</div>
        <button
          onClick={() => onClose()}
          className="flex items-center gap-2 bg-[#5C5470] hover:bg-[#B9B4C7] text-[#FAF0E6] hover:text-[#352F44] py-2 px-4 rounded-lg transition-colors"
        >
          <FaArrowLeft /> Back to Projects
        </button>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-[#352F44] py-16 px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.button
        onClick={() => onClose()}
        className="flex items-center gap-2 mb-8 text-[#FAF0E6] hover:text-[#B9B4C7] transition-colors"
        variants={itemVariants}
      >
        <FaArrowLeft /> Back to Projects
      </motion.button>

      <motion.div
        className="max-w-4xl mx-auto bg-[#5C5470] rounded-xl overflow-hidden shadow-xl"
        variants={itemVariants}
      >
        {/* Project Image Banner - Replace with actual project image */}
        <div className="h-64 bg-[#B9B4C7] flex items-center justify-center relative overflow-hidden">
          <img
            src={project.image}
            alt="image"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-80"
          />
        </div>

        <div className="p-8">
          <motion.div
            className="flex flex-wrap gap-3 mb-6"
            variants={itemVariants}
          >
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-[#352F44] text-[#FAF0E6] rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="text-[#FAF0E6] text-lg mb-8"
            variants={itemVariants}
          >
            {project.description}
          </motion.p>

          <motion.div className="mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-[#FAF0E6] mb-3">
              The Challenge
            </h2>
            <p className="text-[#FAF0E6]">{project.challenge}</p>
          </motion.div>

          <motion.div className="mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-[#FAF0E6] mb-3">
              The Solution
            </h2>
            <p className="text-[#FAF0E6]">{project.solution}</p>
          </motion.div>

          <motion.div className="mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-[#FAF0E6] mb-3">
              Key Features
            </h2>
            <ul className="list-disc pl-5 text-[#FAF0E6]">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-[#FAF0E6] mb-3">Results</h2>
            <p className="text-[#FAF0E6]">{project.results}</p>
          </motion.div>

          <motion.div className="flex gap-4 mt-8" variants={itemVariants}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#352F44] hover:bg-[#B9B4C7] text-[#FAF0E6] hover:text-[#352F44] py-2 px-6 rounded-lg transition-colors"
            >
              <FaGithub />
              <span>View Repository</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#352F44] hover:bg-[#B9B4C7] text-[#FAF0E6] hover:text-[#352F44] py-2 px-6 rounded-lg transition-colors"
            >
              <FaExternalLinkAlt />
              <span className="hover:text-[#352F44]">Visit Live Site</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
