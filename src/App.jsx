import React, { useContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { MyContext } from './Context';
import ProfileCard from './ProfileCard';
import ProjectDetail from './ProjectDetail';

// Lazy-loaded components
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Tools = lazy(() => import('./Tools'));
const Experience = lazy(() => import('./Experience'));
const ContactPage = lazy(() => import('./Contact'));

function App() {
  const { activeBar } = useContext(MyContext);

  return (
   
      <div className="w-full h-screen">
        {/* Navbar */}
        <div className="flex justify-center mt-6 w-full">
          <Navbar />
        </div>

        <div className="flex mx-36 mt-10 gap-10">
          {/* Sticky ProfileCard */}
          <div className="w-[30%] h-fit sticky top-10">
            <ProfileCard />
          </div>

          {/* Dynamic Content */}
          <div className="w-[70%]">
            <Suspense fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-[#5C5470]"></div>
              </div>
            }>
              {activeBar === 'about' && <About />}
              {activeBar === 'project' && <Projects />}
              {activeBar === 'tools' && <Tools />}
              {activeBar === 'experience' && <Experience />}
              {activeBar === 'contact' && <ContactPage />}
            </Suspense>
          </div>
        </div>

       
       
      </div>
   
  );
}

export default App;
