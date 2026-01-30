import { motion } from "motion/react";
import Layer from "../Layer";

export default function PositionChange() {
  return (
    <Layer>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        Hello World
      </motion.h1>
    </Layer>
  );
}
