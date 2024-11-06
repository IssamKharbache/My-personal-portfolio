import { motion } from "framer-motion";
import { useContext } from "react";
import { modalContext } from "../../../context/modalContext";

const variants = {
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 1,
    },
  }),
  hidden: {
    x: 100,
    opacity: 0,
  },
};

const Links = ({ isOpen, setOpen }) => {
  const { setShowModalcv } = useContext(modalContext);
  const links = ["Home", "Projects", "About", "Contact"];
  return (
    <div className="links">
      {links.map((link, idx) => (
        <motion.a
          onClick={() => {
            setOpen(false);
            setShowModalcv(false);
          }}
          variants={variants}
          animate={isOpen ? "show" : "hidden"}
          custom={idx}
          href={`#${link}`}
          key={idx}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {link}
        </motion.a>
      ))}
    </div>
  );
};

export default Links;
