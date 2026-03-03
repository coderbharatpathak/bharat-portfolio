import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide"
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start md:pl-12"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 hover:scale-105 transition duration-300">
              <iframe
                title="Morena Location"
                src="https://www.google.com/maps?q=Morena,India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg md:pl-28"
          >

            <p>
              <span className="text-blue-500 font-semibold">📞 Phone:</span><br />
              <a href="tel:+919343759656" className="hover:text-blue-400 transition">
                +91 9343759656
              </a>
            </p>

            <p>
              <span className="text-blue-500 font-semibold">📧 Email:</span><br />
              <a
                href="mailto:imbharatpathak2004@gmail.com"
                className="hover:text-blue-400 transition"
              >
                imbharatpathak2004@gmail.com
              </a>
            </p>

            <p>
              <span className="text-blue-500 font-semibold">📍 Address:</span><br />
              Morena, Madhya Pradesh, India
            </p>

            {/* Social Links */}
            <div className="flex gap-6 pt-6 text-lg">

              <a
                href="https://github.com/coderbharatpathak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300 hover:scale-110"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/bharat-pathak-4aa3a428b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300 hover:scale-110"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/bharatpathak41"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300 hover:scale-110"
              >
                Instagram
              </a>

            </div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default Contact;