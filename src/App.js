import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Projects from "./components/Projects/Projects.js"
import Logo from "./components/Logo/Logo.js"

function App() {
  return (
    <>
    <Logo />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
