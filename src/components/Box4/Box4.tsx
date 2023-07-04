import { motion } from "framer-motion";

interface Box2Props {}

export default function Box4({}: Box2Props) {
  return (
    <div className="pb-40">
      <motion.div
        transition={{
          delay: 0.7,
          duration: 2,
        }}
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        className="w-64 h-64  bg-teal-600 flex flex-col items-center justify-center"
      ></motion.div>
    </div>
  );
}
