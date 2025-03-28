import React, { useContext } from 'react';
import Navbar from './Navbar';
import MyProvider, { MyContext } from './Context';
import ProfileCard from './ProfileCard';
import About from './About';
import Projects from './Projects';
import Tools from './Tools';
import Experience from './Experience';
import ContactPage from './Contact';

function App() {
  const { activeBar } = useContext(MyContext);

  return (
    <div className="w-full bg h-svh">
      {/* Navbar Section */}
      <div className="flex justify-center mt-6 w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row mx-4 sm:mx-10 lg:mx-36 mt-10 gap-10">

        {/* Sticky ProfileCard - Moves to top on small screens */}
        <div className="w-full lg:w-[30%] h-fit lg:sticky top-10">
          <ProfileCard />
        </div>

        {/* Dynamic Content */}
        <div className="w-full lg:w-[70%]">
          {activeBar === "about" ? (
            <About />
          ) : activeBar === "project" ? (
            <Projects />
          ) : activeBar === "tools" ? (
            <Tools />
          ) : activeBar === "experience" ? (
            <Experience />
          ) : activeBar === "contact" ? (
            <ContactPage />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
