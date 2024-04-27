/* eslint-disable react/no-unescaped-entities */
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <hr />
      <Projects />
      <Contact />
      <hr />
      <Footer />
    </>
  );
}

export default Home;
