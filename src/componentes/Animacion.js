import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./Animacion.css";

const Animacion = ({ show, onHide }) => {
  const logoAnimation = useSpring({
    opacity: show ? 1 : 0,
    from: { opacity: 0 }, // Comienza completamente transparente
    config: { duration: 1000 },
    onStart: () => {
      if (!show) {
        onHide();
      }
    },
    onRest: () => {
      
      if (show) {
        logoAnimation.opacity.start(0);
       
      }
    },
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        top: 340,
        left: 700,
        zIndex: show ? 2 : -1, // Ajusta el valor de zIndex según necesites
      }}
    >
      <div className="with-background">
        <div className="animacionContenedora">
          <animated.div style={logoAnimation}>
            <img className="logo2" src="https://abisulkes.alwaysdata.net/logoAlanCamerman.png" alt="Logo" />
          </animated.div>
        </div>
      </div>
    </animated.div>
  );
};

export default Animacion;
