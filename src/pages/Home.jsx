/* eslint-disable react/no-unescaped-entities */
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

function Home() {
  return (
    <>
      <Hero />
      <main className="container">
        <Skills />
        <Portfolio />
      </main>
      <Contact />
    </>
  );
}

export default Home;
