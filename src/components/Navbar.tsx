import React from 'react';
import { Send } from 'lucide-react';
import XIcon from './XIcon';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6">
      <a 
        href="https://pump.fun/coin/C8yf2KZp2zQUzprLtMGZ73htSPcXg8uAAaKamkoRpump"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition-colors"
      >
        BUY
      </a>
      
      <div className="flex gap-4">
        <a 
          href="https://x.com/innervoicecto"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-2 rounded-lg hover:bg-black/80 transition-colors"
        >
          <XIcon size={24} />
        </a>
        <a 
          href="https://t.me/innervoicecto"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-2 rounded-lg hover:bg-black/80 transition-colors"
        >
          <Send size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;