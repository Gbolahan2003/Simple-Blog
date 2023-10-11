import { motion } from "framer-motion";

interface TransitionProps {
  element: React.ReactNode;
}

const Transition = ({ element }: TransitionProps) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {element}
    </motion.div>
  );
};

export default Transition;
