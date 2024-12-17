
import { useEffect, useState } from 'react';

import hair_dry from '../../assets/hair_dry.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';
import carousel4 from '../../assets/carousel4.jpg';
import carousel5 from '../../assets/carousel5.jpg';

import './carousel.css';

const images = [
    hair_dry,
    carousel2,
    carousel3,
    carousel4,
    carousel5
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [trans, setTrans] = useState(true);

    const changeImage = () => {
        setCurrentIndex((prevIndex) => prevIndex === images.length -1 ? 0 : prevIndex + 1);
        setTrans(!trans);
    };

    useEffect(() => {
        const carouselInterval = setInterval(changeImage, 7000);

        return () => {
            clearInterval(carouselInterval);
        }
    });

    return (
        <>
            <div className='carousel_container'>
                <img src={images[currentIndex]} alt="hair style" className='slide'/>
            </div>
        </>
    );
}

export default Carousel;