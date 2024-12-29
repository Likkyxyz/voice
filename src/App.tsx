import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#282828] to-[#5B564E]">
      <Navbar />
      
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 leading-tight tracking-tight text-black">
          To find peace, you must<br />
          cast out the noise and<br />
          listen to your inner voice.
        </h1>
        
        <div className="w-64 h-64 bg-white/10 rounded-lg overflow-hidden">
          <img 
            src="/cto.png" 
            alt="CTO" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://t.me/VoiceCTO_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
          >
            Talk to your inner $VOICE
          </a>
          
          <p className="text-lg font-light italic text-black">
            The first AI developed by a CTO
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;