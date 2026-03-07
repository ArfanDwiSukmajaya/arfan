'use client';
import React, { useRef } from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import About from "./component/About";
import ExperienceTimeline from "./component/Experience";
import ContactSection from "./component/ContactMe";
import ProjectSection from "./component/Project";
import SkillsSection from "./component/Skils";
import ImageSequence from "./component/ImageSequence";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="relative min-h-screen font-sans bg-striped-pattern dark:bg-gray-950">
        <Navbar />
        
        {/* Sticky Hero Animation Container */}
        <div ref={containerRef} className="relative h-[300vh] w-full z-10">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
             <ImageSequence 
                frameCount={192} 
                baseUrl="/sequence/ezgif-frame-" 
                extension=".jpg" 
                containerRef={containerRef}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <HeroSection containerRef={containerRef} />
              </div>
          </div>
        </div>

        {/* Content sections that will cover the hero from bottom to top */}
        <div className="relative z-20 bg-striped-pattern dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 shadow-[0_-50px_100px_rgba(0,0,0,0.15)] dark:shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
          <div className="relative z-10">
            <About />
            <ExperienceTimeline />
            <ProjectSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </>
  );
}
