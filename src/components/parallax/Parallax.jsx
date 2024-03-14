import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

// Parallax functional component
const Parallax = ({ type }) => {
  // Ref for the component
  const ref = useRef();

  // useScroll hook to get scrollYProgress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // useTransform for transforming the y position of text
  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  // useTransform for transforming the y position of background
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Render the Parallax component
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "Works"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      {/* Motion h1 for the text with y transform */}
      <motion.h1 style={{ y: ytext }}>
        {type === "Works" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      {/* Motion div for mountains */}
      <motion.div className="mountains"></motion.div>
      {/* Motion div for planets or sun */}
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "Works" ? "/planets.png" : "/sun.png"})`,
        }}
      ></motion.div>
      {/* Motion div for stars with x transform */}
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

// Export the Parallax component as the default export
export default Parallax;
