import React from 'react';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/originals/a4/c8/f5/a4c8f50017b6938d53bf67b1efb48d3a.gif)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center"
          style={{ fontFamily: 'UnifrakturCook, serif' }}
        >
          thirdeyehound
        </h1>
      </div>
    </div>
  );
}

export default App;