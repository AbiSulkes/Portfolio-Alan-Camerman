import React from 'react';
import "./Branding.css"

const Branding = () => {
  return (
    <div>
      {/* ... 1 ... */}
      <div className="imagenesContenedor">
        <img src="https://abisulkes.alwaysdata.net/imagen-08.png" alt="displayImg" />
      </div>
      {/* ... 2 ... */}
      <div className="imagenesContenedor2">
        <img src="https://abisulkes.alwaysdata.net/imagen-09.png" alt="logos" />
      </div>

      {/* ... 3 ... */}
      <div className="imagenesContenedor3">
        <img className="fondoRelleno" src=" https://abisulkes.alwaysdata.net/imagen%20fondo%20parte%203.png" alt="fondoCielo" />
        <img className="texto" src="https://abisulkes.alwaysdata.net/imagen%20parte%203%20sin%20fondo.png" alt="texto" />
      </div>

      {/* ... 4 ... */}
      <div className="contenedorImagen4">
      <img className="imagenContenedor4" src="https://abisulkes.alwaysdata.net/imagen-11.png" alt="arribal" />
    </div>

      {/* ... 5 ... */}
      <div className="contenedorImagen5">
      <img className="imagenContenedor5" src="https://abisulkes.alwaysdata.net/imagen-12.png" alt="contactUs" />
    </div>


    </div>
  );
}

export default Branding;