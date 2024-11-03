import React from 'react'; // Make sure this line is included
import NavBar from './components/NavBar';
import Hero from './components/Hero';


function App() {
  return (
    <div className='bg-[#14213d] h-full p-0'>
      <NavBar />
      <Hero/>
      
    </div>
  );
}

export default App;
