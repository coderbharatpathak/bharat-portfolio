import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="src/assets/images/coding.png" // ✅ Relative path fix
              alt="Coding Illustration"
              className="w-80 md:w-96 rounded-2xl shadow-2xl object-cover hover:scale-105 transition duration-300"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Frontend Developer & Lifelong Learner 🚀
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              I am a passionate Frontend Developer who loves building modern,
              responsive and user-friendly web applications. I focus on writing
              clean code and creating beautiful user interfaces.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Currently, I am strengthening my skills in React, JavaScript and
              Tailwind CSS while working on real-world projects to gain hands-on
              experience and improve problem-solving abilities.
            </p>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800 shadow-xl rounded-2xl p-6 border border-slate-700"
            >
              <ul className="space-y-3 text-gray-300">
                <li><strong className="text-blue-400">Name:</strong> Bharat Pathak</li>
                <li><strong className="text-blue-400">Role:</strong> Frontend Developer</li>
                <li><strong className="text-blue-400">Experience:</strong> Fresher</li>
                <li><strong className="text-blue-400">Location:</strong> India</li>
                <li><strong className="text-blue-400">Email:</strong> imbharatpathak2004@gmail.com</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;