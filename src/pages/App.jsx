/* eslint-disable react/no-unescaped-entities */
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <hr />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
