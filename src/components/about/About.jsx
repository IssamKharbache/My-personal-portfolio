import { motion, useInView } from "framer-motion";
import "./about.scss";
import { useRef } from "react";

const variants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    x: -500,
    opacity: 0,
  },
  fromRight: {
    x: 800,
    transition: {
      duration: 1,
    },
  },
};
const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView && "show"}
      className="about"
    >
      <motion.div
        initial="fromRight"
        animate="show"
        variants={variants}
        className="textContainer"
      >
        <p>
          Passionate Software and <br /> Web developer
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(97, 118, 179)" }}>
              Issam
            </motion.b>{" "}
            Kharbache
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(97, 118, 179)" }}>
              More
            </motion.b>{" "}
            about me
          </h1>
          <button>
            <a href="#Contact">Hire me</a>
          </button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="descriptionContainer">
        <p>
          Hello! I'm Issam Kharbache, a passionate software and web developer. I
          specialize in crafting responsive, elegant, and user-friendly websites
          and applications using new technologies. My technical expertise
          includes proficiency in several programming languages (such as
          JavaScript, Python, Java, etc.), frameworks (React, Django, etc.), and
          databases (SQL, MongoDB, etc.).
        </p>
      </motion.div>
    </div>
  );
};

export default About;
