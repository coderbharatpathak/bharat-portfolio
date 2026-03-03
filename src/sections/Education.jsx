import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 scroll-mt-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="text-blue-500">Education</span>
        </motion.h2>

        <div className="relative border-l-2 border-blue-500 pl-8 space-y-10">

          {/* MCA */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[11px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>
            <div className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                ITM University, Gwalior
              </p>
              <p className="text-gray-400 text-sm">
                2024 – 2026 (Ongoing)
              </p>
            </div>
          </motion.div>

          {/* BCA */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[11px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>
            <div className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                ITM University, Gwalior
              </p>
              <p className="text-gray-400 text-sm">
                2021 – 2024 | CGPA: 6.99
              </p>
            </div>
          </motion.div>

          {/* 12th */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[11px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>
            <div className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">
                Class 12th
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                JS Public School, Morena
              </p>
              <p className="text-gray-400 text-sm">
                2020 – 2021 | 85%
              </p>
            </div>
          </motion.div>

          {/* 10th */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[11px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>
            <div className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">
                Class 10th
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                JS Public School, Morena
              </p>
              <p className="text-gray-400 text-sm">
                2018 – 2019 | 86.2%
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default Education;