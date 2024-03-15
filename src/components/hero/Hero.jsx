import React, { useEffect, useRef } from "react";
import {  motion } from "framer-motion";
import { init } from 'ityped';
import "./hero.scss";

// Animation variants for text elements
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  ScrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Animation variants for the sliding text
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

// Animation variants for images
const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

// Hero functional component
const Hero = () => {
  // Ref for ityped library
  const textRef = useRef();

  // useEffect to initialize ityped library
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        " Web Developer",
        " Web Designer",
        "Content Creator",
        "UI Designer",
        "Backend Developer",
      ],
    });
  }, []);

  // Render the Hero component
  return (
    <div className="hero">
      <div className="wrapper">
        {/* Motion div for text container */}
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* Motion heading with variants */}
          <motion.h2 variants={textVariants}>SACHIN THAKUR</motion.h2>
          {/* Motion heading with variants and ityped library */}
          <motion.h3 variants={textVariants}>
            I'm a <span ref={textRef}></span>
          </motion.h3>
          {/* Motion div for buttons with variants */}
          <motion.div className="buttons" variants={textVariants}>
            {/* Motion button with hover and tap animations */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={textVariants}
            >
              See the latest work
            </motion.button>
            {/* Motion button with hover and tap animations */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={textVariants}
            >
              Contact Me
            </motion.button>
            {/* Motion button with hover and tap animations */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={textVariants}
            >
              Download CV
            </motion.button>
          </motion.div>
          {/* Motion image for scroll button with variants */}
          <motion.img
            variants={textVariants}
            animate="ScrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      {/* Motion div for sliding text with variants */}
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer
      </motion.div>
      {/* Motion div for image container with variants */}
      <motion.div
        variants={imageVariants}
        animate="animate"
        initial="initial"
        className="imageContainer"
      >
        {/* Motion image with variants */}
        <motion.img variants={imageVariants} src="/sachin.png" alt="" />
      </motion.div>
    </div>
  );
};

// Export the Hero component as the default export
export default Hero;
