import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Hi, I'm <span className="text-blue-500">Bharat Pathak</span> 👋
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-300 mb-8 max-w-xl"
          >
            I am a passionate Frontend Developer who loves building modern,
            responsive and user-friendly web applications. I focus on clean
            code and smooth user experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/Bharat%20Pathak%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition px-6 py-3 rounded-lg text-lg font-semibold inline-block"
            >
              View CV
            </a>

            <a
              href="/Bharat%20Pathak%20CV.pdf"
              download
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105 transition px-6 py-3 rounded-lg text-lg font-semibold inline-block"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.img
            src="/bharat-portfolio/bharat-hero.png"
            alt="Bharat"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="
              w-64 h-80 md:w-80 md:h-[420px]
              object-cover
              rounded-2xl
              shadow-xl
              border-4 border-blue-500
              transition-all duration-300 ease-in-out
              hover:scale-105
              hover:shadow-blue-500/40
            "
          />
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Hero;