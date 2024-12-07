import { motion } from "framer-motion";
import PulsingButton from "./components/PulsingButton";
import BouncingLoader from "./components/BouncingLoader";

const App = () => {
  return (
    <div>
      <motion.div
        className="box"
        initial={{ x: 500, y: 100 }}
        animate={{ scale: [1, 2, 2, 1, 1, 2], rotate: [0, 0, 270, 270, 0, 0] }}
        transition={{ duration: 10, ease: "linear" }}
      />
      <PulsingButton />
      <BouncingLoader />
    </div>
  );
};

export default App;
