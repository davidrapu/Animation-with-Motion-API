import { useState } from "react";
import Layer from "../Layer";
import { motion } from "motion/react";

export default function CollabsableList() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const items = [1, 2, 3, 4, 5];
  return (
    <Layer>
      <div className="flex flex-col gap-y-2">
        {items.map((item) => (
          <motion.div
          key={item}
            onClick={() => {
              setExpandedId(expandedId => expandedId === item ? null : item);
            }}
            className="bg-white p-2 border border-[#111F35] rounded-xl text-center cursor-pointer"
            layout
          >
            Item {item}
            {expandedId && expandedId === item && (
              <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.6}} >Lorem ipsum dolor sit amet.</motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </Layer>
  );
}
