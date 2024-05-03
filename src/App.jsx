import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyResume from './pages/MyResume';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<MyResume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
