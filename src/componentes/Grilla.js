import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grilla.css';

function Grilla() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollBackground, setScrollBackground] = useState('transparent');

  // Función para manejar el evento de scroll
  const handleScroll = () => {
    // Obtener la posición de scroll actual
    const currentScrollPos = window.scrollY;

    // Establecer el color de fondo dependiendo de la dirección de scroll
    const backgroundColor = currentScrollPos > prevScrollPos ? 'black' : 'transparent';

    // Actualizar el estado de la posición de scroll y el color de fondo
    setPrevScrollPos(currentScrollPos);
    setScrollBackground(backgroundColor);
  };

  // Agregar un listener para el evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpieza del efecto cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (

    <Container id="scroll-container" style={{ backgroundColor: scrollBackground }}>
      <h6 className='TituloLogo'  style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>SOME LOGOS CREATED</h6>
      {/* ... primera fila ... */}
      <Row className="fila1">

        <Col className='caja1'>
          <span style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>For:Entheos</span>
          <p style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>The epicurean vegan club</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-17.png" alt="ImagenLogo1"
          style={{ filter: `invert(${scrollBackground === 'black' ? 1 : 0})` }} />
        </Col>

        <Col className='caja2'>
          <span style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>For:Primal Market</span>
          <p style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>Organic Store</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-18.png" alt="ImagenLogo1"  style={{ filter: `invert(${scrollBackground === 'black' ? 1 : 0})` }}/></Col>

        <Col className='caja3'>
          <span style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>For:baliza Deep House</span>
          <p style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>Music Festival</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-19.png" alt="ImagenLogo1" style={{ filter: `invert(${scrollBackground === 'black' ? 1 : 0})` }} />
        </Col>

      </Row>
      {/* ... fin primera fila ... */}

      {/* ... segunda fila ... */}
      <Row className='fila2'>

        <Col className='caja4'>
          <span style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>For:La Estrella del Este</span>
          <p style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>Bakery Store</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-20.png" alt="ImagenLogo1" style={{ filter: `invert(${scrollBackground === 'black' ? 1 : 0})` }} />
        </Col>

        <Col className='caja5'>
          <span style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>For:Portsaid HotSale</span>
          <p style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>Brand</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-21.png" alt="ImagenLogo1"  style={{ filter: `invert(${scrollBackground === 'black' ? 1 : 0})` }}/></Col>

        <Col className='caja6'>
          <span style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>For:Cacao & Vainilla</span>
          <p style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>Coffee Store</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-22.png" alt="ImagenLogo1" style={{ filter: `invert(${scrollBackground === 'black' ? 1 : 0})` }} />
        </Col>

      </Row>
      {/* ... fin segunda fila ... */}

      {/* ... tercera fila ... */}
      <Row className='fila3'>

        <Col className='caja7'>
          <span style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>For:Fraktal Studio</span>
          <p style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>Branding Desing Studio</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-23.png" alt="ImagenLogo1"style={{ filter: `invert(${scrollBackground === 'black' ? 1 : 0})` }} />
        </Col>

        <Col className='caja8'>
          <span style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>For:Qi</span>
          <p style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>Tea House</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-24.png" alt="ImagenLogo1" style={{ filter: `invert(${scrollBackground === 'black' ? 1 : 0})` }}/></Col>

        <Col className='caja9'>
          <span style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>For:iConiQ</span>
          <p style={{ color: scrollBackground === 'black' ? 'white' : 'black' }}>Data driven Agency</p>

          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-25.png" alt="ImagenLogo1" style={{ filter: `invert(${scrollBackground === 'black' ? 1 : 0})` }} />
        </Col>

      </Row>
      {/* ... fin tercera fila ... */}


    </Container>
  );
}

export default Grilla;