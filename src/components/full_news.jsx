import { useState } from 'react';

export default function FullNews({ slides }) {
  const [slide, setSlide] = useState(0);

  return (
    <div className="fn_content">
      <div className="fn_slide">
        <h2>{slides[slide].title}</h2>
        <p>{slides[slide].content}</p>
      </div>
      <div className="fn_buttons">
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
