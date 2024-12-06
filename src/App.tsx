import { motion } from "framer-motion";

const App = () => {
  return (
    <div>
        <motion.div
            className="box"
            initial={{ x: 0 }}
            animate={{ x: 300 }}
            transition={{ duration: 2, ease: "linear"}}
        />
    </div>
  );
};

export default App;
