import { motion } from "framer-motion";
import PulsingButton from "./components/PulsingButton";
import BouncingLoader from "./components/BouncingLoader";
import { useState } from "react";
import FlippingCard from "./components/FlippingCard";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <motion.div
        className="box"
        initial={{ x: 500, y: 100 }}
        //animate={{ scale: [1, 2, 2, 1, 1, 2], rotate: [0, 0, 270, 270, 0, 0] }}
        transition={{ duration: 1, ease: "linear" }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
        }}
        //initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        onAnimationComplete={() => setIsVisible(!isVisible)}
        exit="exit"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9, backgroundColor: "red" }}
        drag
        //dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      />
      <PulsingButton />
      <BouncingLoader />
      <FlippingCard />
    </div>
  );
};

export default App;
