/* eslint-disable react/no-unescaped-entities */
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

function Home() {
  return (
    <>
      <Intro />
      <main className="container">
        <Skills />
        <Portfolio />
      </main>
      <Contact />
    </>
  );
}

export default Home;
