import { motion } from "motion/react";
import Layer from "../Layer";

export default function Fade() {
  return (
    <Layer>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hello World
      </motion.h1>
    </Layer>
  );
}
