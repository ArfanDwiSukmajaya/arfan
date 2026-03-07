"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function HeroSection({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = React.useState({ greeting: '', name: '' });
  const [showCursor, setShowCursor] = React.useState(true);
  const [canStart, setCanStart] = React.useState(false);

  const greeting = t('hero.greeting');
  const name = t('hero.name');

  // Listen to scroll to start typing when the person is "sitting" (around 15% scroll)
  React.useEffect(() => {
    const handleStartScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const scrollRange = containerHeight - window.innerHeight;
      const relativeScroll = Math.max(0, Math.min(scrollRange, scrollY - containerTop));
      const scrollFraction = relativeScroll / scrollRange;

      if (scrollFraction > 0.15 && !canStart) {
        setCanStart(true);
      }
    };

    window.addEventListener('scroll', handleStartScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleStartScroll);
  }, [containerRef, canStart]);

  React.useEffect(() => {
    if (!canStart) return;

    let greetingIndex = 0;
    let nameIndex = 0;
    const typingSpeed = 120; // Slower speed
    const waitBeforeRestart = 3000; // 3 seconds at the end

    let typeGreeting: NodeJS.Timeout;
    let typeName: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;

    const startTyping = () => {
      greetingIndex = 0;
      nameIndex = 0;
      setDisplayText({ greeting: '', name: '' });

      typeGreeting = setInterval(() => {
        if (greetingIndex <= greeting.length) {
          setDisplayText(prev => ({ ...prev, greeting: greeting.slice(0, greetingIndex) }));
          greetingIndex++;
        } else {
          clearInterval(typeGreeting);
          // Start typing name after greeting
          typeName = setInterval(() => {
            if (nameIndex <= name.length) {
              setDisplayText(prev => ({ ...prev, name: name.slice(0, nameIndex) }));
              nameIndex++;
            } else {
              clearInterval(typeName);
              // Wait then restart the loop
              restartTimeout = setTimeout(() => {
                startTyping();
              }, waitBeforeRestart);
            }
          }, typingSpeed);
        }
      }, typingSpeed);
    };

    startTyping();

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeGreeting);
      clearInterval(typeName);
      clearInterval(cursorBlink);
      clearTimeout(restartTimeout);
    };
  }, [canStart, greeting, name]);

  return (
    // Outer wrapper for hero content
    <div className="min-h-screen w-full flex items-center justify-start px-6 md:pl-[15%] lg:pl-[20%] transition-opacity duration-300 pointer-events-none">

      <div className="w-full max-w-5xl text-left z-10 pointer-events-auto flex justify-start">
        
        {/* Glassmorphism Card for Text Content */}
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl inline-block min-h-[220px]">
          <div className="flex flex-col items-start">
            {/* Main Title and Description */}
            <div className="w-full">
              <span className="text-lg md:text-xl text-gray-950 dark:text-white leading-tight block mb-2 font-semibold drop-shadow-xl min-h-[1.5em]">
                {displayText.greeting}
                {displayText.greeting.length < greeting.length && <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1`}>|</span>}
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 tracking-tighter whitespace-nowrap min-h-[1.2em]">
                <span className="bg-gradient-to-r from-gray-950 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent drop-shadow-md">
                  {displayText.name}
                </span>
                {displayText.greeting.length >= greeting.length && displayText.name.length <= name.length && <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1 text-gray-900 dark:text-white`}>|</span>}
              </h3>

              {/* Button */}
              <div className="flex flex-col sm:flex-row">
                <a href="#about" className="group flex items-center justify-center px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black text-base font-bold rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(234,179,8,0.2)] hover:shadow-[0_15px_30px_rgba(234,179,8,0.3)] hover:-translate-y-1">
                  Explore
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;