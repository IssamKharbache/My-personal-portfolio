import { motion } from "framer-motion";
import "./hero.scss";

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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
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
            <motion.a href="#Contact" variants={textVariants}>
              Contact me
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
