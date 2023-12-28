import React, { useEffect } from 'react';
import './FondoCielo.css';
import 'animate.css/animate.min.css';

const FondoCielo = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const overlay = document.querySelector('.overlay-container img');
      overlay.classList.add('animate__fadeInDown');

      setTimeout(() => {
        overlay.classList.remove('animate__fadeInDown');
      }, 1000); // Adjust the time as needed
    }, 5000); // Repeat the animation every 5 seconds, adjust the time as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='contBranding'>
      <img className="fondo" src="https://abisulkes.alwaysdata.net/imagen%20fondo%20parte%203-.png" alt="ImagenGif2" />

      <div className="overlay-container">
        <img className="animate__animated imagenTexto" src="https://abisulkes.alwaysdata.net/imagen%20parte%203%20sin%20fondo.png" alt="ImagenGif2" />
      </div>
    </div>
  );
}

export default FondoCielo;

