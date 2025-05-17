import { useState } from 'react';

export default function Carousel({ slides }) {
  const [slide, setSlide] = useState(0);

  return (
    <div className="carousel_content">
      <div
        className="carousel_slide"
        style={{ backgroundImage: `url(${slides[slide].image})` }}
      >
        <h2>{slides[slide].title}</h2>
        <p>{slides[slide].subtitle}</p>
      </div>
      <div className="carousel_buttons">
        {slides.map((slideObject, index) => (
          <button
            key={index}
            className={index == slide ? 'active' : ''}
            onClick={() => setSlide(index)}
          >
            {index}
          </button>
        ))}
      </div>
    </div>
  );
}
