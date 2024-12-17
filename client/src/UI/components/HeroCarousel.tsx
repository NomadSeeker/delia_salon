import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




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

const responsive ={
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  };


const HeroCarousel = () => {

    return (
      <div style={{zIndex: '1'}}>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          autoPlay
          autoPlaySpeed={6000}
          centerMode={false}
          className=""
          containerClass="container"
          // customDot={<CustomDot />}
          // dotListClass=""
    
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          // showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
      >
          {images.map(image => (
            <img className="" src={image} alt={`${image}`} style={{display:'block', height:'100%', margin: 'auto', width:'100%'}}/>  
          ))}
                    
        </Carousel>
      </div>
        
    );
}

export default HeroCarousel;