'use client';
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import About from "./component/About";
import ExperienceTimeline from "./component/Experience";
import ContactSection from "./component/ContactMe";
import ProjectSection from "./component/Project";
import SkillsSection from "./component/Skils";
export default function Home() {
  return (
    <>
      <div className="bg-striped-pattern min-h-screen">
        <Navbar />
        <HeroSection />
        <About />
        <ExperienceTimeline />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
}
