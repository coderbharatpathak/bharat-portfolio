import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-slate-900 flex items-center justify-center z-[100]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-white tracking-widest"
      >
        <span className="text-blue-500">Bharat</span> Pathak
      </motion.h1>
    </motion.div>
  );
}

export default Loader;