import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Box2Props {}

export default function Box3({}: Box2Props) {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="pb-40">
      <motion.div
        className="w-64 h-64  bg-teal-600 flex flex-col items-center justify-center"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[...Array(3).keys()].map((index) => (
          <motion.li
            key={index}
            variants={listVariant}
            className="w-1 h-1 bg-white p-5 list-none m-2"
          ></motion.li>
        ))}
      </motion.div>
    </div>
  );
}
