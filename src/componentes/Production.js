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
            <div>
                <h3>Slide 1</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
            </div>
            <div>
                <h3>Slide 2</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
            </div>
            <div>
                <h3>Slide 3</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
            </div>
            <div>
                <h3>Slide 4</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
            </div>
            <div>
                <h3>Slide 5</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
            </div>
            <div>
                <h3>Slide 6</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
            </div>
            <div>
                <h3>Slide 7</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
            </div>
            <div>
                <h3>Slide 8</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
            </div>
            <div>
                <h3>Slide 9</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
            </div>
            <div>
                <h3>Slide 10</h3>
                <img src="https://abisulkes.alwaysdata.net/fondoImg.png" alt="Slide 1" />
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
