import Layer from "../Layer";
import { motion } from "motion/react";

const numbers = [1, 2, 3, 4, 5];

const listContainer = {
    hidden: { opacity: 0 },
    visible: {opacity: 1, transition: {staggerChildren: 0.3}}
}

const listItem = {
    hidden: { opacity: 0, x: 20},
    visible: { opacity: 1, x: 0}
}
export default function StaggeringChildren() {
  return (
    <Layer>
        <motion.ul variants={listContainer} initial="hidden" animate="visible" className="list-disc w-fit">
            {
                numbers.map((number) => (
                    <motion.li key={number} variants={listItem} className="">
                        {number}
                    </motion.li>
                ))
            }
        </motion.ul>
    </Layer>
  )
}
