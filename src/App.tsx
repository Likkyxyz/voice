import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#282828] to-[#5B564E]">
      <Navbar />
      
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight tracking-tight" style={{ color: '#000000' }}>
          The first CTO<br className="md:hidden" /> to develop the tech
        </h1>
        
        <div className="w-64 h-64 bg-white/10 rounded-lg overflow-hidden">
          <img 
            src="VOICES.jpg" 
            alt="VOICE" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <a 
          href="https://t.me/VoiceCTO_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
        >
          Talk to your inner $VOICE
        </a>
      </div>
    </div>
  );
}

export default App;