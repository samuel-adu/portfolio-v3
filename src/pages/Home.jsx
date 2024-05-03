/* eslint-disable react/no-unescaped-entities */
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
