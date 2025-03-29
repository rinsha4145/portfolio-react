import React, { useContext, Suspense, lazy } from 'react';
import Navbar from './Navbar';
import MyProvider, { MyContext } from './Context';
import ProfileCard from './ProfileCard';

// Lazy-loaded components
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Tools = lazy(() => import('./Tools'));
const Experience = lazy(() => import('./Experience'));
const ContactPage = lazy(() => import('./Contact'));

function App() {
  const { activeBar } = useContext(MyContext);

  return (
    <div className="w-full h-svh">
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
          <Suspense fallback={<div><div className="w-full h-full fixed top-0 left-0 bg-white opacity-20 z-50">
  <div className="flex justify-center items-center mt-[50vh]">
  <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-[#5C5470]"></div>
  </div>
</div></div>}>
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
