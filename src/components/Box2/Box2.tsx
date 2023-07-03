import { useRef } from "react";
import { motion } from "framer-motion";

interface Box2Props {}

export default function Box2({}: Box2Props) {
  const dragContainer = useRef<HTMLDivElement>(null);

  return (
    <div ref={dragContainer} className="pb-40">
      <motion.div
        className="w-64 h-64 bg-gradient-to-tr to-blue-600 from-teal-600 flex flex-col items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5,
        }}
      ></motion.div>
    </div>
  );
}
