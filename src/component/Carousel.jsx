import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Slider {...settings}>
        <div>
          <img className="mx-auto" src="https://via.placeholder.com/600x400" alt="Slide 1" />
        </div>
        <div>
          <img className="mx-auto" src="https://via.placeholder.com/600x400" alt="Slide 2" />
        </div>
        <div>
          <img className="mx-auto" src="https://via.placeholder.com/600x400" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
