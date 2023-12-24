import React from 'react';


import './About.css'; // Asegúrate de importar tu archivo de estilo

const About = () => {
  return (
    <div>
      <div className="imagenesContenedor">
        <img className="imgAbout" src="https://abisulkes.alwaysdata.net/imagen%20about%20desktop-03.png" alt="about" />

      </div>
      <div className="Mobile">
        <img  className="imgMobile" src="https://abisulkes.alwaysdata.net/imagen%20about%20mobile.png" alt="aboutMobile" />
        <p className="textoMobile">Graphic designer graduated from the University of Buenos Aires, Argentina, passionate about Typographic design / Production / Art direction /
          Photography / Editorial design / Experimentation / Graphics in space /
          Hochschule für Gestaltung / Systematic Composition /</p>

          <p className="textoMobile">Specializing in creative art direction, design, and content creation with a focus on fashion, art, lifestyle and honesty.</p>
          <img  className="firma" src="https://abisulkes.alwaysdata.net/Firma%20WEB%20AL-14.png" alt="aboutMobileFirma" />
      </div>
    </div>
  );
}

export default About;
