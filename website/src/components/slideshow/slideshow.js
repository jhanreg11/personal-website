import React from 'react'
import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'
import './slideshow.css'

const CarouselUI = ({ position, handleClick, children}) => (
	<div className="carousel-container">
		<div onClick={handleClick} className="left arrow" data-position={position - 1}>{'<'}</div>
		{children}
		<div className="right arrow" onClick={handleClick} data-position={position + 1}>{'>'}</div>
	</div>
)

const Carousel = makeCarousel(CarouselUI)

const Slideshow = props => (
	<Carousel defaultWait={10000}>
		{props.items.map(item => (
			<Slide right>
				{item}
			</Slide>
		))}
	</Carousel>
)

export default Slideshow