import React from "react";
import "./Css/slider.css";

function SliderSon({ img }) {
  const settings = {
    autoPlay: true,
    autoplaypeed: 4820,
    dots: "true",
    duration: 300,
  };
  return (
    <section className="slider">
      <h1 className="slider__title">Yo</h1>
      {
        <div className="slider__content" {...settings}>
          {img.map((imag) => (
            <div key={imag.id} className="slider__content--item">
              <img src={imag.image} alt={imag.title} />
              <p className="slider-description">{imag.title}</p>
            </div>
          ))}
        </div>
      }
    </section>
  );
}

export default SliderSon;
