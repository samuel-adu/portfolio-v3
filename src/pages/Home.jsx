/* eslint-disable react/no-unescaped-entities */
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
// import About from '../components/About';
// import Experience from '../components/Experience';

function Home() {
  return (
    <>
      <Intro />
      <main className="container">
        {/* <About /> */}
        <Skills />
        <Portfolio />
        {/* <Experience /> */}
      </main>
      <Contact />
    </>
  );
}

export default Home;
