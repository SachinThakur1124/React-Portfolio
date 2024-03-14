import { useRef } from "react";
import "./work.scss";
import { motion, useInView } from "framer-motion";

// Variants for animation
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

// Works component functional component
const Works = () => {
  // Ref for detecting if the component is in view
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  // Render the Works component
  return (
    <div className="class">
      {/* Motion div with animation variants and ref */}
      <motion.div
        className="works"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        {/* Text container with animation variants */}
        <motion.div className="textContainer" variants={variants}>
          <p>I focus on helping your brand grow and move forward</p>
          <hr />
        </motion.div>
        {/* Title container with animation variants */}
        <motion.div className="titleContainer" variants={variants} animate="animate">
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <motion.b style={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
            {/* Nested title container with animation variants */}
            <div className="title2">
              <h1>
                <motion.b style={{ color: "orange" }}>For Your</motion.b> Business.
              </h1>
              <button>WHAT I DO?</button>
            </div>
          </div>
        </motion.div>
        {/* List container with animation variants */}
        <motion.div className="listContainer" variants={variants}>
          {/* Individual boxes with animation variants */}
          <motion.div className="box" whileHover={{ backgroundColor: "gray", color: "black" }}>
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus dolorum
              aspernatur veniam laboriosam doloribus eos ipsum rerum accusamus provident!
            </p>
            {/* Button with hover and tap animations */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Go
            </motion.button>
          </motion.div>
          <motion.div className="box" whileHover={{ backgroundColor: "gray", color: "black" }}>
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus dolorum
              aspernatur veniam laboriosam doloribus eos ipsum rerum accusamus provident!
            </p>
            {/* Button with hover and tap animations */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Go
            </motion.button>
          </motion.div>
          <motion.div className="box" whileHover={{ backgroundColor: "gray", color: "black" }}>
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus dolorum
              aspernatur veniam laboriosam doloribus eos ipsum rerum accusamus provident!
            </p>
            {/* Button with hover and tap animations */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Go
            </motion.button>
          </motion.div>
          <motion.div className="box" whileHover={{ backgroundColor: "gray", color: "black" }}>
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus dolorum
              aspernatur veniam laboriosam doloribus eos ipsum rerum accusamus provident!
            </p>
            {/* Button with hover and tap animations */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Go
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Export the Works component as the default export
export default Works;
