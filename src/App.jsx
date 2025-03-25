import React from 'react'
import Navbar from './Navbar'
import MyProvider from './Context'
import ProfileCard from './ProfileCard'

function App() {
  return (
   <MyProvider>
    <div className='w-full h-svh'>
      <div className='flex justify-center mt-6 w-full'> <Navbar/></div>
     <div className='flex mx-36 h-screen mt-10 gap-2 '>
      <div className='w-[30%]'><ProfileCard/></div>
      <div className='w-[70%]'>efefafkwfkwa</div>

     </div>
    </div>
    </MyProvider>
  )
}

export default App