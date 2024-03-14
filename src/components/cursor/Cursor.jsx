import { useEffect, useState } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

// Cursor functional component
const Cursor = () => {
    // State to track the cursor position
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // useEffect to add and remove mousemove event listener
    useEffect(() => {
        // Function to update position on mousemove
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Adding event listener on component mount
        window.addEventListener("mousemove", mouseMove);

        // Removing event listener on component unmount
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []); // Empty dependency array ensures the effect runs only on mount and unmount

    // Render the Cursor component
    return (
        // Motion div for animated cursor
        <motion.div className="cursor" animate={{ x: position.x + 10, y: position.y + 10 }}></motion.div>
    );
}

// Export the Cursor component as the default export
export default Cursor;
