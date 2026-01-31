import { useRef } from "react";
import Layer from "../Layer";
import { motion } from "motion/react";

export default function DragAndDrop() {
    const constraintsRef = useRef<HTMLDivElement | null>(null);
  return (
    <Layer ref={constraintsRef}>
      <motion.div
        className="bg-[#FFDAB3] p-4 font-bold text-sm rounded-xl cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
      >
        Drag
      </motion.div>
    </Layer>
  );
}
