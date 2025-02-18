import "./navbar.scss";
import { AnimatePresence, motion } from "framer-motion";
//icon
import { HiDownload } from "react-icons/hi";
//
import SideBar from "../sidebar/SideBar";
import Socials from "../Socials";
import { useContext } from "react";
import CvModal from "../modals/CvModal";
import { modalContext } from "../../context/modalContext";
const NavBar = () => {
  const { showModalcv, setShowModalcv } = useContext(modalContext);
  return (
    <>
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
            <button type="button" onClick={() => setShowModalcv(true)}>
              <HiDownload size={20} />
              Download CV
            </button>
            <Socials />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>{showModalcv && <CvModal />}</AnimatePresence>
    </>
  );
};

export default NavBar;
