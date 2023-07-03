import {} from "react";
import { motion } from "framer-motion";

interface Box1Props {}

export default function Box1({}: Box1Props) {
  return (
    <div className="pb-80">
      <motion.div animate={{
        x:"100vw"
}} className="w-64 h-64 bg-teal-500 flex flex-col items-center justify-center"></motion.div>
    </div>
  );
}
