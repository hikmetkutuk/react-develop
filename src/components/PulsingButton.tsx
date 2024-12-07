import { motion } from "framer-motion";
const PulsingButton = () => {
  return (
    <motion.button
      className="px-4 bg-blue-500 rounded outline-none"
      animate={{
        scale: [1, 2, 1],
        backgroundColor: ["#ff0000", "#00ff00", "#0000ff"],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      Click me
    </motion.button>
  );
};

export default PulsingButton;
