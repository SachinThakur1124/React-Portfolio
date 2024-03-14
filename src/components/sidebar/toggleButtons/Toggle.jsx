import { motion } from "framer-motion";

// Toggle component functional component
const Toggle = ({ setOpen }) => {
  // Render the Toggle component
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {/* SVG icon with motion paths for animation */}
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* First line path with variants for open and closed states */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        {/* Second line path with variants for open and closed states */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        {/* Third line path with variants for open and closed states */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

// Export the Toggle component as the default export
export default Toggle;
