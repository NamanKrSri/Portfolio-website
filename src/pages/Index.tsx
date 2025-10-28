import { useState, useEffect } from "react";
import LandingOverlay from "@/components/LandingOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import FreelanceProjects from "@/components/sections/FreelanceProjects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";
import Resume from "@/components/sections/Resume";
import Footer from "@/components/Footer";
import homeBackground from "@/assets/home-background.jpg";

const Index = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  // Handle escape key to close overlay
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showOverlay) {
        setShowOverlay(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showOverlay]);

  return (
    <div className="relative min-h-screen" style={{ backgroundImage: `url(${homeBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <LandingOverlay isOpen={showOverlay} onClose={() => setShowOverlay(false)} />
      
      <div className={showOverlay ? "blur-sm pointer-events-none" : ""}>
        <Navbar />
        <main>
          <Hero onShowOverlay={() => setShowOverlay(true)} />
          <About />
          <Projects />
          <FreelanceProjects />
          <Experience />
          <Skills />
          <Achievements />
          {/* <Blogs /> */}
          <Contact />
          <Resume />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
