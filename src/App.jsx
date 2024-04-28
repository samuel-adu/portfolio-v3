import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyResume from './pages/MyResume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<MyResume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
