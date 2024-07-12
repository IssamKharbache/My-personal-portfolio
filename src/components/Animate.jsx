import React, { useState } from "react";
import { motion } from "framer-motion";
const Animate = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };
  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      <motion.ul variants={variants} initial="hidden" animate="visible">
        {items.map((item, idx) => [
          <motion.li variants={variants} key={idx} custom={idx}>
            {item}
          </motion.li>,
        ])}
      </motion.ul>
    </div>
  );
};

export default Animate;
