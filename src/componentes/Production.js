import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Production.css"

const Production = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true,
        centerPadding: '20.5%', // Ajusta este valor según tus necesidades
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Slider {...settings}>
            <div >

                <div className="slideContenido">
                    <div className="dosImagenesContenedor">
                        <img className="imagenIzquierda" src="https://abisulkes.alwaysdata.net/Production%201.1.png" alt="imagen1" />
                        <img className="gifDerecha" src="https://abisulkes.alwaysdata.net/giff2.gif" alt="ImagenGif2" />
                    </div>
                </div>

            </div>
            <div>
                <img className="imagenSlide" src="https://abisulkes.alwaysdata.net/Production%202.png" alt="imagen2" />
            </div>
            <div>
                <img   className="imagenSlide" src="https://abisulkes.alwaysdata.net/Production%203.png" alt="imagen3" />
            </div>
            <div>
                <img   className="imagenSlide" src="https://abisulkes.alwaysdata.net/Production%204.png" alt="imagen4" />
            </div>
            <div>
                <img  className="imagenSlide"  src="https://abisulkes.alwaysdata.net/Production%205.png" alt="imagen5" />
            </div>
            <div>
                <img  className="imagenSlide"  src="https://abisulkes.alwaysdata.net/Production%206.png" alt="imagen6" />
            </div>
            <div>
                <img   className="imagenSlide" src="https://abisulkes.alwaysdata.net/Production%207.png" alt="imagen7" />
            </div>
            <div>
                <img  className="imagenSlide" src="https://abisulkes.alwaysdata.net/Production%208.png" alt="imagen8" />
            </div>
            <div>
                <img   className="imagenSlide" src="https://abisulkes.alwaysdata.net/Production%209.png" alt="imagen9" />
            </div>
            <div>
                <img  className="imagenSlide" src="https://abisulkes.alwaysdata.net/Production%2010.png" alt="imagen10" />
            </div>
            <div>
                <img  className="imagenSlide" src="https://abisulkes.alwaysdata.net/Production%2011.png" alt="imagen11" />
            </div>
        </Slider>

    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow arrow-prev" onClick={onClick}>
            <span>&lt;</span>
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow arrow-next" onClick={onClick}>
            <span>&gt;</span>
        </div>
    );
};

export default Production;
