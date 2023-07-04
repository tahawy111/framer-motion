import { motion, useAnimation } from "framer-motion";

interface Box2Props {}

export default function Box5({}: Box2Props) {
  const control = useAnimation();
  return (
    <div className="pb-40">
      <button
        onClick={() =>
          control.start({
            x: "70vw",
            transition: { duration: 2 },
          })
        }
        className="text-white bg-sky-600 p-3 mx-3 rounded-sm my-1 font-bold"
      >
        Move Right
      </button>
      <button
        onClick={() =>
          control.start({
            x: 0,
            transition: { duration: 2 },
          })
        }
        className="text-white bg-sky-600 p-3 mx-3 rounded-sm my-1 font-bold"
      >
        Move Left
      </button>
      <button
        onClick={() =>
          control.start({
            borderRadius: "50%",
            transition: { duration: 2 },
          })
        }
        className="text-white bg-sky-600 p-3 mx-3 rounded-sm my-1 font-bold"
      >
        Circle
      </button>
      <button
        onClick={() =>
          control.start({
            borderRadius: 0,
            transition: { duration: 2 },
          })
        }
        className="text-white bg-sky-600 p-3 mx-3 rounded-sm my-1 font-bold"
      >
        Square
      </button>
      <button
        onClick={() => control.stop()}
        className="text-white bg-sky-600 p-3 mx-3 rounded-sm my-1 font-bold"
      >
        Stop
      </button>
      <motion.div
        animate={control}
        transition={{
          delay: 0.7,
          duration: 2,
        }}
        className="w-64 h-64  bg-teal-600 flex flex-col items-center justify-center"
      ></motion.div>
    </div>
  );
}
