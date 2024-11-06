import { IoCloseCircleOutline } from "react-icons/io5";
import "./cv-modal.scss";
import { modalContext } from "../../context/modalContext";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import { DownloadIcon } from "lucide-react";

const CvModal = () => {
  const { showModalcv, setShowModalcv } = useContext(modalContext);

  return (
    <div className="backdrop">
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -300 }}
        className="cv-modalContainer "
      >
        <div className="loginModalTitle">
          <h2>Download CV</h2>
          <IoCloseCircleOutline
            className="closeIcon "
            onClick={() => setShowModalcv(false)}
          />
        </div>
        <a
          href="/english-cv.pdf"
          download="english-cv.pdf"
          onClick={() => setShowModalcv(false)}
          className="buttonContainer"
        >
          <button className="downloadButton">
            <ReactCountryFlag className="flag" countryCode="US" svg />
            <span>English</span>
            <DownloadIcon size={20} />
          </button>
        </a>
        <a
          href="/francais-cv.pdf"
          download="francais-cv.pdf"
          className="buttonContainer"
          onClick={() => setShowModalcv(false)}
        >
          <button className="downloadButton">
            <ReactCountryFlag className="flag" countryCode="FR" svg />
            <span>Français</span>
            <DownloadIcon size={20} />
          </button>
        </a>
        <div className="buttonContainer">
          <button disabled className="downloadButton">
            <ReactCountryFlag className="flag" countryCode="DE" svg />
            <span>Deutsch</span>
            <DownloadIcon size={20} />
          </button>
        </div>{" "}
      </motion.div>
    </div>
  );
};

export default CvModal;
