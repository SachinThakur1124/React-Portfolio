import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import TechMarquee from "./components/marquee/TechMarquee";
import About from "./components/aboutme/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

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

        {/* About Me / Bento Grid */}
        <About />

        {/* Featured Projects / Portfolio */}
        <section id="Portfolio">
          <Portfolio />
        </section>

        {/* Technical Skills */}
        <Skills />

        {/* Professional Experience */}
        <Experience />

        {/* Formal Education & Degrees */}
        <Education />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
