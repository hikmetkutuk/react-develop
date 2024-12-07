import { motion } from "framer-motion";

const BouncingLoader = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
