import { motion } from "motion/react"
import Layer from "../Layer";
export default function Hovering() {
  return (
    <Layer className="space-x-5">
      <motion.button
        className="bg-[#FFDAB3] p-2.5 rounded-xl cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        spring
      </motion.button>
      <motion.button
        className="bg-[#FFDAB3] p-2.5 rounded-xl cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "keyframes", stiffness: 300 }}
      >
        keyframes
      </motion.button>
      <motion.button
        className="bg-[#FFDAB3] p-2.5 rounded-xl cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "decay" }}
      >
        decay
      </motion.button>
      <motion.button
        className="bg-[#FFDAB3] p-2.5 rounded-xl cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "inertia", stiffness: 300 }}
      >
        inertia
      </motion.button>
      <motion.button
        className="bg-[#FFDAB3] p-2.5 rounded-xl cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "tween", duration: 0.3, ease: 'easeOut' }}
      >
        tween
      </motion.button>
    </Layer>
  );
}
