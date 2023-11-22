import React from 'react';

//Componentes 
import { Link, Route, Routes } from 'react-router-dom';
import Logo from "./componentes/Logo"
import FontComponent from './componentes/Tipografia';

//Enlaces
import Home from './componentes/Home';
import About from './componentes/About';
import Branding from './componentes/Branding';
import Production from './componentes/Production';
import Contact from './componentes/Contact';

//CSS
import './componentes/Logo.css';
import './componentes/Home.css';
import "./App.css"

function App() {
  return (
    <div>

      <main>
        <FontComponent />
        <Logo />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/Production" element={<Production />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <div className='enlaces'>
          <Link className='enlace' to="/">HOME</Link>
          <Link className='enlace' to="/About">ABOUT</Link>
          <Link className='enlace' to="/Branding">BRANDING</Link>
          <Link className='enlace' to="/Production">PRODUCTION</Link>
          <Link className='enlace' to="/Contact">CONTACT</Link>
        </div>

      </main>
      <footer>
        <p className="contacto">+54 9 2304 58-7859 </p>
        <p className="contacto"> Alaan.camerman@gmail.com</p>
        <p className="contacto"> -34.588889°, -58.430556°</p>

      </footer>
    </div>
  );
}

export default App;

