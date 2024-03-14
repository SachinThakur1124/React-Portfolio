import "./app.scss";
import About from "./components/aboutme/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="app">
      {/* Cursor component */}
      <Cursor />
      {/* Home section with Navbar and Hero components */}
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      {/* Works section with Parallax and Works components */}
      <section id="Works">
        <Parallax type="Works" />
      </section>
      <section>
        <Works />
      </section>
      {/* Portfolio section with Parallax and Portfolio components */}
      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>
      <Portfolio />
      {/* AboutMe section with About component */}
      <section id="AboutMe"><About /></section>
      {/* Contact section with Contact component */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
