import { useState } from "react";
import { motion } from "framer-motion";

interface Box1Props {}

export default function Box1({}: Box1Props) {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  return (
    <div className="pb-40">
      <motion.div
        className="w-64 h-64 bg-gradient-to-tr to-blue-600 from-teal-600 flex flex-col items-center justify-center"
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        initial={{ opacity: 0.1 }}
        animate={{
          x: isAnimating ? "70vw" : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        onClick={() => setIsAnimating((prev) => !prev)}
      ></motion.div>
    </div>
  );
}
