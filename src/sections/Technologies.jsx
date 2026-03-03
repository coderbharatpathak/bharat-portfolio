// src/sections/Technologies.jsx

import { motion } from "framer-motion";

function Technologies() {
  const skills = [
    { name: "ES6", img: "/es6.png" },
    { name: "React Hooks", img: "/reacthooks.png" },
    { name: "Redux", img: "/redux.png" },
    { name: "HTML", img: "/html.png" },
    { name: "CSS", img: "/css.png" },
    { name: "JavaScript", img: "/javascript.png" },
    { name: "React", img: "/react.png" },
    { name: "Tailwind CSS", img: "/tailwind.png" },
    { name: "Git", img: "/git.png" },
    { name: "GitHub", img: "/github.png" },
    { name: "Responsive Design", img: "/responsive.png" }
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 scroll-mt-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee">

            {[...skills, ...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-slate-800 px-6 py-4 rounded-xl shadow-lg min-w-max hover:scale-105 transition duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <p className="text-lg font-semibold whitespace-nowrap">
                  {skill.name}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default Technologies;