import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
        
          <Slider {...settings}>
            <div className="slideContenido">
                <div className="dosImagenesContenedor">
                    <img className="imagenIzquierda" src="https://abisulkes.alwaysdata.net/Primal%20market%20brand%20behance-04.png" alt="Imagen 1" />
                    <img className="gifDerecha" src="https://abisulkes.alwaysdata.net/gif%20market.gif" alt="Imagen 2" />
                </div>
            </div>

            <div className="slideContenido">
                <h3>Slide 1</h3>
                <img src="imagen1.jpg" alt="PrimalMarketImg" />
            </div>

            <div className="slideContenido">
                <h3>Slide 2</h3>
                <img src="imagen2.jpg" alt="Slide 2" />
            </div>

            <div className="slideContenido">
                <h3>Slide 3</h3>
                <img src="imagen3.jpg" alt="Slide 3" />
            </div>
        </Slider>
        </div>
    );
}

export default Home;