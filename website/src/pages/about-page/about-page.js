import React from 'react'
import Section from '../../components/section/section'
import AboutImg from '../../img/collage.jpg'
import './about-page.css'
import Reveal from 'react-reveal/Reveal'

const AboutPage = (props) => (
	<Section title="About Me" id="about">
			<div className="body-text">Hi, I'm Jacob Hanson-Regalado. I am a sophomore studying Computer Science at Diablo
				Valley College in Pleasant Hill, California. I am always expanding my skills and exploring new interests. Most of my experience outside of the
				classroom up to this point has been web-development, but I am also interested in other subjects like Artificial
				Intelligence and Machine Learning. I also enjoy traveling, eating spicy food, playing
				spike ball and disc golf, and hanging out with my girlfriend. I hope you enjoy my site!</div>
			<div id="about-img"><img src={AboutImg}/></div>
	</Section>
)

export default AboutPage