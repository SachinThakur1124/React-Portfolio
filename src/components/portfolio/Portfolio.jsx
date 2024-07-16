import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Hotel Booking Site",
    img: "hh.png",
    desc: "Implemented the frontend using React.js, utilizing components, hooks, and context for state management and UIinteractions.Implemented user authentication using JWT (JSON Web Tokens) for secure login and registration processes.",
    seeDemo: "https://github.com/SachinThakur1124/HOTEL-HUB",
    seeCode: "https://github.com/SachinThakur1124/HOTEL-HUB",
  },
  {
    id: 2,
    title: "Nike Landing Page",
    img: "Nike.png",
    desc: " This Nike landing page is a modern, responsive web page built with React and styled using Tailwind CSS. The design aims to provide an engaging user experience, showcasing the latest Nike products, promotions, and brand stories.",
    seeDemo: "https://nike-front-page.netlify.app/",
    seeCode: "https://github.com/SachinThakur1124/NIKE-Landing-Page",
  },
  {
    id: 3,
    title: "Modern AI ",
    img: "AI.png",
    desc: "The Brainwave AI landing page is a sleek, modern web page designed to introduce and promote Brainwave AI, an innovative AI-powered solution. Built with React for a dynamic interface and styled using Tailwind CSS, this landing page aims to captivate visitors with its clean design, intuitive navigation, and compelling content.",
    seeDemo: "https://modern-ai-landing-page.netlify.app/",
    seeCode: "https://github.com/SachinThakur1124/Modern-AI-Landing-Page",
  },
  {
    id: 4,
    title: "Weather App",
    img: "Weather.png",
    desc: "The Weather App is a modern, user-friendly application designed to provide accurate and up-to-date weather information for any location worldwide. Built with React for a dynamic interface, styled using Tailwind CSS for a sleek design, and powered by the OpenWeatherMap API, this app offers a seamless and interactive user experience.",
    seeDemo: "https://react-vite-weather-app.netlify.app/",
    seeCode: "https://github.com/SachinThakur1124/Weather-App",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const openUrl = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.seeDemo && (
              <button onClick={() => openUrl(item.seeDemo)}>See Demo</button>
            )}
            {item.seeCode && (
              <button onClick={() => openUrl(item.seeCode)}>See Code</button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
