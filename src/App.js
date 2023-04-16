import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/courses" element={<Course />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
