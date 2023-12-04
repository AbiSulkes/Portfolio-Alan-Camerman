import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Animacion from './componentes/Animacion';
import Logo from "./componentes/Logo"
//import { FaCheck } from 'react-icons/fa';
import FontComponent from './componentes/Tipografia';

import About from './componentes/About';
import Branding from './componentes/Branding';
import Production from './componentes/Production';
import Contact from './componentes/Contact';
import './componentes/Logo.css';
import './componentes/Production.css';
import "./App.css"

function App() {
    //Animacion logo principal
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

// Contenedores principales
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

  // Tel & Email
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

                <Route path="/About" element={<About />} />
                <Route path="/Branding" element={<Branding />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/" exact={true} element={<Production />} />
              </Routes>



              <div className='enlaces'>
                <Link className='enlace' to="/About">ABOUT</Link>
                <Link className='enlace' to="/Branding">BRANDING</Link>
                <Link className='enlace' to="/">PRODUCTION</Link>
                <Link className='enlace' to="/Contact">CONTACT</Link>
              </div>

            </Contenidos>

            <footer className="contacto">
  <div className="telefonoContainer">
    <div className="contactoHijo">
      <a href={`https://wa.me/${teléfono}`} target="_blank" rel="noopener noreferrer" style={{ color: "#222222", textDecoration: 'none' }}>
        <span>{teléfono} <span>√</span></span>
      </a>
    </div>
  </div>

  <div className="emailContainer">
    <a href={`mailto:${email}`} style={{ color: "#222222", textDecoration: 'none' }}>
      <p className="contactoHijo1">{email}</p>
    </a>
  </div>

  <div className="coordenadasContainer">
    <p className="contactoHijo2">-34.588889°, -58.430556°</p>
  </div>
</footer>

          </Contenedor>
        </div>

      )}
    </div>
  );
}

export default App;


