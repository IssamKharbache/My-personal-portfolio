import "./parallax.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollAnimation: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <h1>{type === "about" ? "About me" : "My projects"}</h1>
      <motion.img
        animate="scrollAnimation"
        variants={textVariants}
        src="/scroll.png"
        alt="scrollpng"
      />
    </div>
  );
};

export default Parallax;
