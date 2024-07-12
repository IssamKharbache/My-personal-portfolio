import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./cursor.scss";
const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: mousePosition.x + 12, y: mousePosition.y + 12 }}
    ></motion.div>
  );
};

export default Cursor;
