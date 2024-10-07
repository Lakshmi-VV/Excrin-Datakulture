"use client";
import React from "react";
import { motion } from "framer-motion";

const parentVariants = (staggerChildren, duration, y, delay) => ({
  hidden: { y: y || 10, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: duration || 0.5,
      ease: "linear",
      staggerChildren: staggerChildren || 0.6,
      delay: delay || 0,
    },
  },
});
const childVariants = {
  hidden: { opacity: 0, y: 5 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
      staggerChildren: 0.6,
    },
  },
};

function Easeanimation({
  children,
  className,
  staggerChildren,
  duration,
  y,
  childClassName,
  delay,
}) {
  return (
    <motion.div
      variants={parentVariants(staggerChildren, duration, y, delay)}
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: true }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants} className={childClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Easeanimation;
