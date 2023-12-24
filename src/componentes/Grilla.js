import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Grilla.css";

function Grilla() {
  return (
    <Container>
      {/* ... primera fila ... */}
      <Row className="fila1">

        <Col className='caja1'>
          <span >For:Entheos</span>
          <p>The epicurean vegan club</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-17.png" alt="ImagenLogo1" />
        </Col>

        <Col className='caja2'>
          <span>For:Primal Market</span>
          <p>Organic Store</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-18.png" alt="ImagenLogo1" /></Col>

        <Col className='caja3'>
          <span>For:baliza Deep House</span>
          <p>Music Festival</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-19.png" alt="ImagenLogo1" />
        </Col>

      </Row>
      {/* ... fin primera fila ... */}

      {/* ... segunda fila ... */}
      <Row className='fila2'>

        <Col className='caja4'>
          <span >For:La Estrella del Este</span>
          <p>Bakery Store</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-20.png" alt="ImagenLogo1" />
        </Col>

        <Col className='caja5'>
          <span>For:Portsaid HotSale</span>
          <p>Brand</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-21.png" alt="ImagenLogo1" /></Col>

        <Col className='caja6'>
          <span>For:Cacao & Vainilla</span>
          <p>Coffee Store</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-22.png" alt="ImagenLogo1" />
        </Col>

      </Row>
      {/* ... fin segunda fila ... */}
      {/* ... tercera fila ... */}
      <Row className='fila3'>

        <Col className='caja7'>
          <span >For:Fraktal Studio</span>
          <p>Branding Desing Studio</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-23.png" alt="ImagenLogo1" />
        </Col>

        <Col className='caja8'>
        <span>For:Qi</span>
          <p>Tea House</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-24.png" alt="ImagenLogo1" /></Col>

        <Col className='caja9'>
          <span>For:iConiQ</span>
          <p>Data driven Agency</p>
          <img className="logotipo" src="https://abisulkes.alwaysdata.net/logos%20negro%20WEB%20AL-25.png" alt="ImagenLogo1" />
        </Col>

      </Row>
      {/* ... fin tercera fila ... */}
    </Container>
  );
}

export default Grilla;