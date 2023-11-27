import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Animacion from './componentes/Animacion';
import Logo from "./componentes/Logo"
import { FaCheck } from 'react-icons/fa';
import FontComponent from './componentes/Tipografia';
import Home from './componentes/Home';
import About from './componentes/About';
import Branding from './componentes/Branding';
import Production from './componentes/Production';
import Contact from './componentes/Contact';
import './componentes/Logo.css';
import './componentes/Production.css';
import "./App.css"

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const Contenedor = ({ children }) => (
    <div className="contenedor">
      {children}
    </div>
  );

  const Contenidos = ({ children }) => (
    <main className="contenidos">
      {children}
    </main>
  );
  const teléfono = '+542304587859'; // Número de teléfono para WhatsApp
  const email = 'Alaan.camerman@gmail.com'; // Dirección de correo electrónico
  return (
    <div>
      <Animacion show={showLogo} onHide={() => setShowLogo(false)} />
      {!showLogo && (
        <div>
          <Contenedor>
            <Contenidos>
              <FontComponent />
              <Logo />
              {/* ... otros componentes ... */}

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Branding" element={<Branding />} />
                <Route path="/Production" element={<Production />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>

              <div className='enlaces'>
                <Link className='enlace' to="/About">ABOUT</Link>
                <Link className='enlace' to="/Branding">BRANDING</Link>
                <Link className='enlace' to="/Production">PRODUCTION</Link>
                <Link className='enlace' to="/Contact">CONTACT</Link>
              </div>

            </Contenidos>

            <footer className="contacto">
      <div className="contactoHijo">
        <a href={`https://wa.me/${teléfono}`} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
          <span>{teléfono}</span>
        </a>
        <FaCheck className="icono" style={{ marginLeft: '5px' }} />
      </div>
      <a href={`mailto:${email}`} style={{ color: 'black', textDecoration: 'none' }}>
        <p className="contactoHijo1">{email}</p>
      </a>
      <p className="contactoHijo2">-34.588889°, -58.430556°</p>
    </footer>

          </Contenedor>
        </div>

      )}
    </div>
  );
}

export default App;


