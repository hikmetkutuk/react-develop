import { motion } from "framer-motion";
import PulsingButton from "./components/PulsingButton";
import BouncingLoader from "./components/BouncingLoader";
import { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <motion.div
        className="box"
        //initial={{ x: 500, y: 100 }}
        //animate={{ scale: [1, 2, 2, 1, 1, 2], rotate: [0, 0, 270, 270, 0, 0] }}
        transition={{ duration: 1, ease: "linear" }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
        }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        onAnimationComplete={() => setIsVisible(!isVisible)}
        exit="exit"
        onClick={() => setIsVisible(!isVisible)}
      />
      <PulsingButton />
      <BouncingLoader />
    </div>
  );
};

export default App;
