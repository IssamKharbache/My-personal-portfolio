import "./projects.scss";
import { itemsProject } from "../../data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
//icons
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Single = ({ items }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imgContainer">
            <img src={items.image} alt="" />
          </div>

          <motion.div style={{ y }} className="textContainer">
            <h2>{items.title}</h2>
            <p>{items.description}</p>
            {items.title === "Easy eat" && (
              <p>Contact me for the admin dashboard link</p>
            )}
            <div className="buttons">
              <a href={items.live} target="_blank">
                <FaArrowRightLong />
              </a>
              <a href={items.github} target="_blank">
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Projects = () => {
  const ref = useRef();
  //scroll y handling
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Latest projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {itemsProject.map((item, idx) => (
        <Single items={item} key={idx} />
      ))}
    </div>
  );
};

export default Projects;
