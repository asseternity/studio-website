import { useState } from 'react';

export default function Carousel() {
  const [slide, setSlide] = useState(0);

  const testSlides = [
    {
      title: 'Test slide 1',
      subtitle: 'This is test subtitle 1.',
    },
    {
      title: 'Test slide 2',
      subtitle: 'This is test subtitle 2.',
    },
    {
      title: 'Test slide 3',
      subtitle: 'This is test subtitle 3.',
    },
  ];
  return (
    <div className="carousel_content">
      <div className="carousel_slide">
        <h2>{testSlides[slide].title}</h2>
        <p>{testSlides[slide].subtitle}</p>
      </div>
      <div className="carousel_buttons">
        {testSlides.map((slideObject, index) => (
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
