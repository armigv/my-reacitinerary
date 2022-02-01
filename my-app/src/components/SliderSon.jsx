import React from "react"
import "../Css/css.css"
import Slider from 'infinite-react-carousel';
function SliderSon({ images }) {
	const settings = {
		autoplay: true,
		autoplaySpeed: 4820,
		dots: true,
		duration: 300
	};
	return (
		<section className='slider'>
			<h1 className='slider__title'>Yo</h1>
			{/* { <Slider className='slider__content' >
				{images.map((image) => (
						<div key={image.id} className='slider__content--item'>
							<img src={image.image} alt={image.title} />
							<p className='slider-description'>{image.title}</p>
						</div>
					))}
			</Slider>} */}
		</section>

	);
}

export default SliderSon
