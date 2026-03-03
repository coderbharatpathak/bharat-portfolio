import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏳ Loader duration (2 sec)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;