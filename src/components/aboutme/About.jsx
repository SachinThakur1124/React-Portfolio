// Importing the necessary styles for the component
import "./about.scss";

// Importing motion and useInView from framer-motion library
import { motion, useInView } from "framer-motion";

// Importing the useRef hook from React
import { useRef } from "react";

// Defining animation variants for text elements
const textVariants = {
  initial: {
    y: -900,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

// Defining animation variants for image elements
const imageVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

// Functional component definition for the About section
const About = () => {
  // Creating a ref using the useRef hook
  const ref = useRef();
  
  // Using the useInView hook to determine if the component is in the viewport
  const isInView = useInView(ref, { margin: "-100px" });

  // Rendering the About component
  return (
    <motion.div
      className="about"
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <div className="h">
        {/* Using motion to animate the heading */}
        <motion.h1 variants={textVariants}>ABOUT ME</motion.h1>
      </div>

      {/* Using motion to animate the image container */}
      <motion.div variants={imageVariants} className="imageContainer">
        <img src="/sachin.png" alt="" />
      </motion.div>

      {/* Using motion to animate the text container */}
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={isInView && "animate"}
        className="textContainer"
      >
        <p>
          Hello, I'm <strong>Sachin Thakur</strong> a passionate{" "}
          <b>full-stack web developer</b> with a strong foundation in web
          technologies. Currently pursuing my Bachelor's in Computer
          Applications (BCA), I am thrilled to be in the last year of my
          academic journey, where I have honed my skills and knowledge in the
          world of computer science.
        </p>

        <h3>Educational Background:</h3>
        <p>
          I am currently enrolled in the BCA program, a comprehensive course
          that has equipped me with a deep understanding of computer science
          concepts, programming languages, and software development
          methodologies. Throughout my academic journey, I have consistently
          strived for excellence in both theoretical knowledge and practical
          application.
        </p>

        <h3>Professional Focus:</h3>
        <p>
          My primary focus is on full-stack web development, where I specialize
          in both front-end and back-end technologies. I am enthusiastic about
          creating dynamic and user-friendly web applications that not only
          meet but exceed user expectations. From crafting visually appealing
          user interfaces to implementing robust server-side logic, I am
          dedicated to delivering seamless and efficient web solutions.
        </p>

        <h3>Technology Stack:</h3>
        <p>
          I am proficient in a variety of programming languages and frameworks,
          including but not limited to:
        </p>
        <ul>
          <li>Front-end: <b>HTML, SCSS (Sass), CSS, JavaScript, React</b></li>
          <li>Back-end: <b>Python, Django, Node.js, Express.js</b></li>
          <li>Database: <b>MongoDB, MySQL</b></li>
          <li>Version Control: <b>Git, GitHub</b></li>
        </ul>
        <p>
          <b>Thank you</b> for taking the time to learn a bit about me. I look
          forward to connecting with fellow developers, potential
          collaborators, and organizations that share a passion for pushing the
          boundaries of web development.
        </p>
      </motion.div>
    </motion.div>
  );
};

// Exporting the About component as the default export
export default About;
