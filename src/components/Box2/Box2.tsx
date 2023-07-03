import { useState } from "react";
import { motion } from "framer-motion";

interface Box2Props {}

export default function Box2({}: Box2Props) {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  return (
    <div className="pb-40">
      <motion.div
        className="w-64 h-64 bg-gradient-to-tr to-blue-600 from-teal-600 flex flex-col items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ></motion.div>
    </div>
  );
}
