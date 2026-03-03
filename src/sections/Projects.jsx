import { motion } from "framer-motion";
import { projects } from "../data/projects";

function Projects() {
  return (
    <motion.section
      id="projects"
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
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-blue-500/30 transition duration-300 border border-slate-700"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {project.name}
                </h3>

                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-700 text-blue-400 text-sm px-3 py-1 rounded-full border border-blue-500"
                    >
                      {techItem}
                    </motion.span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition inline-block"
                >
                  View on GitHub
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default Projects;