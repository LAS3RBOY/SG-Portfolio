import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
