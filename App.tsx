import React, { useState, useEffect } from 'react';
import { Twitter, Send } from 'lucide-react';

// --- Components ---

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-[#e5e5e5]">
      {/* Logo Area */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 relative">
             <img 
               src="https://i.postimg.cc/bNbc6YXs/ADS-2025-12-04T182605-024.png" 
               alt="$EMPTY Logo" 
               className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
             />
        </div>
        <span className="font-serif-distressed font-bold text-xl tracking-widest group-hover:text-[#DFFF00] transition-colors">
          $EMPTY
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-[#DFFF00] hover:scale-110 transition-all duration-300">
          <Twitter size={24} />
        </a>
        <a href="#" className="hover:text-[#DFFF00] hover:scale-110 transition-all duration-300">
          <Send size={24} />
        </a>
        <a href="#" className="w-8 h-8 hover:scale-110 transition-all duration-300 flex items-center justify-center rounded-full border border-current hover:border-[#DFFF00] hover:bg-[#DFFF00]/10">
           <img 
             src="https://i.postimg.cc/j56WKrBk/ADS-2025-12-03T201034-818.png" 
             alt="Pump.fun" 
             className="w-5 h-5 object-contain"
           />
        </a>
      </div>
    </header>
  );
};

const BackgroundCollage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden bg-[#0a0a0a]">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1818] via-[#0f0f0f] to-[#000000] opacity-90"></div>

      {/* Image 4.1: Vending/Sadness - Top Right */}
      <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vh] opacity-20 rotate-12 mix-blend-overlay filter grayscale sepia contrast-125">
        <img 
          src="https://avatars.mds.yandex.net/i?id=ba20b56d592275ca8776ff9584053ef8_l-12569850-images-thumbs&n=13" 
          alt="Despair 1" 
          className="w-full h-full object-cover mask-image-radial"
        />
      </div>

      {/* Image 4.2: Cards/Debt - Bottom Right */}
      <div className="absolute bottom-[0%] right-[0%] w-[50vw] h-[50vh] opacity-30 -rotate-6 mix-blend-hard-light filter grayscale contrast-150">
        <img 
          src="https://s00.yaplakal.com/pics/pics_original/7/9/0/19367097.jpg" 
          alt="Despair 2" 
          className="w-full h-full object-cover mask-image-diagonal"
        />
      </div>

      {/* Image 4.3: Sadness - Bottom Left */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[60vh] opacity-20 rotate-45 mix-blend-screen filter grayscale brightness-50">
        <img 
          src="https://static.life.ru/publications/2021/2/2/394194807876.97296-1200x.jpeg" 
          alt="Despair 3" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Wallet Image - Centered but organic */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[50vw] h-auto z-10 opacity-90 mix-blend-normal">
        <div className="relative animate-float">
          <img 
            src="https://i.postimg.cc/bNbc6YXs/ADS-2025-12-04T182605-024.png" 
            alt="Empty Wallet" 
            className="w-full h-full object-contain filter drop-shadow-2xl contrast-110"
          />
          {/* Animated Coin falling out */}
           <div className="absolute bottom-[20%] left-[45%] w-12 md:w-20 animate-fall-return">
             <img 
               src="https://i.postimg.cc/bNbc6YXs/ADS-2025-12-04T182605-024.png" 
               alt="Falling Coin"
               className="w-full h-full object-contain rounded-full shadow-lg border-2 border-[#DFFF00]/20"
               style={{ clipPath: 'circle(40%)' }} // Hack to make the wallet look like a coin by clipping it circular
             />
           </div>
           
           {/* Spiderweb Shimmer Overlay (Simulated with CSS) */}
           <div className="absolute top-[30%] left-[50%] w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
    </div>
  );
};

const ContentLayer: React.FC = () => {
  return (
    <main className="relative z-20 w-full h-[100dvh] flex flex-col justify-between p-6 md:p-12 pointer-events-none">
      
      {/* Top Left: Main Title */}
      <div className="pointer-events-auto max-w-lg mt-16 md:mt-24">
        <h1 className="font-serif-distressed text-5xl md:text-7xl lg:text-9xl leading-[0.8] tracking-tighter text-[#e5e5e5] mix-blend-lighten opacity-90">
          IT’S NOT <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#888] to-[#222]">EMPTY.</span> <br/>
          IT’S <span className="toxic-highlight">$EMPTY</span>.
        </h1>
      </div>

      {/* Center Right: The Concept */}
      <div className="absolute top-[25%] right-4 md:right-12 w-[60%] md:w-[350px] pointer-events-auto text-right md:text-left backdrop-blur-sm md:backdrop-blur-none bg-black/20 md:bg-transparent p-4 rounded-xl border border-white/5 md:border-none">
        <h2 className="font-sans-aggressive text-[#DFFF00] text-2xl uppercase tracking-widest mb-2 border-b border-[#DFFF00]/30 inline-block pb-1">
          The Account Status
        </h2>
        <p className="font-typewriter text-sm md:text-base leading-relaxed text-gray-300">
          That feeling when you see the next 100x gem, and the only thing left is the dust from previous 1x gems. <br/><br/>
          We know the pain. We are the pain. <br/>
          <span className="italic text-white/50">Don't pretend you have money left anyway.</span>
        </p>
      </div>

      {/* Bottom Left: Tokenomics */}
      <div className="pointer-events-auto max-w-md mb-24 md:mb-12 backdrop-blur-sm md:backdrop-blur-none bg-black/20 md:bg-transparent p-4 rounded-xl border border-white/5 md:border-none">
        <h2 className="font-sans-aggressive text-[#DFFF00] text-2xl uppercase tracking-widest mb-2 border-b border-[#DFFF00]/30 inline-block pb-1">
          The Ledger
        </h2>
        <p className="font-typewriter text-xs md:text-sm leading-relaxed text-gray-400">
          The $EMPTY Tokenomics is the cleanest thing you'll ever see: 
          <span className="block my-2 pl-4 border-l-2 border-[#DFFF00]/50 text-gray-200">
            Zero tax.<br/>
            Zero team allocation.<br/>
            Zero utility.
          </span>
          The only thing you spend is your last dollar. <br/>
          <span className="font-bold text-gray-200">Buy $EMPTY, embrace the feeling.</span>
        </p>
      </div>

      {/* Center Bottom: CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto w-full md:w-auto flex justify-center px-6">
        <button className="group relative bg-[#DFFF00] text-black font-sans-aggressive text-xl md:text-3xl uppercase py-4 px-8 md:px-12 tracking-widest clip-path-ticket hover:bg-[#ccee00] transition-all duration-100 active:scale-95 shadow-[0_0_30px_rgba(223,255,0,0.3)] hover:shadow-[0_0_50px_rgba(223,255,0,0.6)] animate-pulse-slow">
           <span className="relative z-10 flex items-center gap-2">
             Max Out Your Card 
             <span className="text-sm normal-case opacity-70 block md:inline md:ml-2 font-typewriter">(Buy $EMPTY)</span>
           </span>
           {/* Glitch Overlay on Hover */}
           <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-75"></div>
           <div className="absolute -inset-1 border border-[#DFFF00]/50 opacity-50 blur-sm"></div>
        </button>
      </div>

    </main>
  );
};

const Noise: React.FC = () => <div className="noise-bg"></div>;

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-[#DFFF00] selection:text-black">
      <Noise />
      <BackgroundCollage />
      <Header />
      <ContentLayer />
    </div>
  );
}
