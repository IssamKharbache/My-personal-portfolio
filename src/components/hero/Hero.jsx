import { motion } from "framer-motion";
import "./hero.scss";
import { useContext } from "react";
import { modalContext } from "../../context/modalContext";

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

const Hero = () => {
  const { setShowModalcv } = useContext(modalContext);

  return (
    <div id="Home" className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer"
        >
          <motion.h2 variants={textVariants}>Kharbache Issam</motion.h2>
          <motion.h1 variants={textVariants}>
            Software and Web developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Projects" variants={textVariants}>
              Check my latest works
            </motion.a>
            <motion.a
              className="contactButton"
              href="#Contact"
              variants={textVariants}
            >
              Contact me
            </motion.a>
            <motion.a
              className="cvButton"
              href="#"
              onClick={() => setShowModalcv(true)}
              variants={textVariants}
            >
              Download CV
            </motion.a>
          </motion.div>
          <motion.img
            animate="scrollAnimation"
            variants={textVariants}
            src="/scroll.png"
            alt="scrollpng"
          />
        </motion.div>
      </div>

      <div className="imageContainer">
        <img src="/3dimage.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
