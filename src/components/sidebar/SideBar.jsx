import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import Toggle from "./toggleButtons/Toggle";

// Variants for the sidebar animation
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// Sidebar functional component
const Sidebar = () => {
  // State to manage whether the sidebar is open or closed
  const [open, setOpen] = useState(false);

  // Function to close the sidebar
  const closeSidebar = () => {
    setOpen(false);
  };

  // Render the Sidebar component
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      {/* Motion div for the background with variants */}
      <motion.div className="bg" variants={variants}>
        {/* Include Links component with closeSidebar prop */}
        <Links closeSidebar={closeSidebar} />
      </motion.div>
      {/* Include Toggle component with setOpen prop */}
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
};

// Export the Sidebar component as the default export
export default Sidebar;
