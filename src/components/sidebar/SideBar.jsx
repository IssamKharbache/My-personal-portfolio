import React, { useState } from "react";
import Links from "./links/Links";
import ToogleButton from "./tooglebtn/ToogleButton";
import "./sidebar.scss";
import { motion } from "framer-motion";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1220px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div animate={open ? "open" : "closed"} className="sidebar">
      <motion.div className="bg" variants={variants}>
        <Links isOpen={open} setOpen={setOpen} />
      </motion.div>
      <ToogleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
