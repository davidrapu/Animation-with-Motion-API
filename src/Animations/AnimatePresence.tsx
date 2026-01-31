import { useState } from "react";
import Layer from "../Layer";
import { AnimatePresence, motion } from "motion/react";

export function AnimatePresences() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layer className="flex flex-col gap-y-2 items-center">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="bg-black text-white border-white border rounded-2xl flex justify-center items-center text-base p-2 cursor-pointer"
      >
        Animate Presence
      </button>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-red-600 p-2 border border-[#111F35] rounded-xl text-white"
          >
            This is an animated alert
          </motion.div>
        </AnimatePresence>
      )}
    </Layer>
  );
}

export function Steps() {
  const [step, setStep] = useState(1);

  return (
    <Layer className="flex flex-col gap-y-2 items-center">
      <button
        className="bg-black text-white border-white border rounded-2xl flex justify-center items-center text-base p-2 cursor-pointer"
        onClick={() => setStep(step === 1 ? 2 : 1)}
      >
        Change Step
      </button>

      <AnimatePresence mode="popLayout">
        {step === 1 && (
          <motion.div key='step1' initial={{opacity: 0, y:10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:-10}} transition={{duration: 0.3}} className="bg-white p-2 border border-[#111F35] rounded-xl text-black text-lg">
            Step 1
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key='step2' initial={{opacity: 0, y:10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:-10}} transition={{duration: 0.3}} className="bg-white p-2 border border-[#111F35] rounded-xl text-black text-lg">
            Step 2
          </motion.div>
        )}
      </AnimatePresence>
    </Layer>
  );
}
