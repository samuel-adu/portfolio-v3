/* eslint-disable react/no-unescaped-entities */
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <hr />
      <Projects />
      <Contact />
      <hr />
    </main>
  );
}

export default Home;
