import SideBar from "../sidebar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <div className="navbar">
            <SideBar/>
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Coder Sachin.
                </motion.span>
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100091328652042" target="_blank">
                        <img src="/facebook.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/_samar__thakur/" target="_blank">
                        <img src="/instagram.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/youtube.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/dribbble.png" alt="" />
                    </a>
                </div>

            </div>
        </div>
    )
}
