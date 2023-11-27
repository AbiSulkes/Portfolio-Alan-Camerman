import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Production.css';


const Production = () => {
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
                <img src=" https://abisulkes.alwaysdata.net/prueba%20imagen%20WEB%20AL-04.png" alt="Pruebaimg" />
               
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

export default Production;