/* eslint-disable react/no-unescaped-entities */
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import About from '../components/About';
import Experience from '../components/Experience';

function Home() {
  return (
    <>
      <main className="container">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Contact />
    </>
  );
}

export default Home;
