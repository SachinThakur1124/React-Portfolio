import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import TechMarquee from "./components/marquee/TechMarquee";
import About from "./components/aboutme/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/ui/BackToTop";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Technology Marquee */}
        <TechMarquee />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Professional Experience */}
        <Experience />

        {/* Formal Education & Degrees */}
        <Education />

        {/* Featured Projects Showcase */}
        <Portfolio />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Badge */}
      <BackToTop />
    </div>
  );
}

export default App;
