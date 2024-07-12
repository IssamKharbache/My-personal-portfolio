import { assests } from "../../../public/assets";
import "./navbar.scss";
import { motion } from "framer-motion";
//icon
import { HiDownload } from "react-icons/hi";
//
import SideBar from "../sidebar/SideBar";
import Socials from "../Socials";
const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar />
      {/* side bar*/}
      <div className="wrapper">
        <div className="imagewrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Kharbache.dev
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="infowrapper"
        >
          <button>
            <HiDownload size={20} />
            Download CV
          </button>
          <Socials />
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
