import { motion } from "framer-motion";
import React from "react";

// Links component functional component
const Links = ({ closeSidebar }) => {
  // Variants for animation
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Variants for individual link items
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  // Array of link items
  const items = ["Home", "Works", "Portfolio", "AboutMe", "contact"];

  // Render the Links component
  return (
    <motion.div className="links" variants={variants}>
      {/* Map through each item and render a motion.a element */}
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            closeSidebar(); // Call the closeSidebar function when a link is clicked
          }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

// Export the Links component as the default export
export default Links;
