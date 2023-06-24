import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import elderlyPainting from '../assets/elderly-painting.jpeg'
import elderlyIT from '../assets/elderly-computer.jpeg'
import elderlySew from '../assets/elderly-sew.jpeg'

function IntroCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel class="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={elderlyPainting}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={elderlyIT}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={elderlySew}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IntroCarousel;