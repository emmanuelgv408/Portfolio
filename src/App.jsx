import React from 'react'; // Make sure this line is included
import NavBar from './components/NavBar';
import Hero from './components/Hero';




function App() {
  return (
    <div className='relative h-full p-0 bg-background'>



      <NavBar />
      <Hero/>
      
    </div>
  );
}

export default App;
