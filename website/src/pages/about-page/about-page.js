import React from 'react'
import Section from '../../components/section/section'
import AboutImg from '../../img/collage.jpg'
import './about-page.css'


const AboutPage = (props) => (
	<Section title="About Me" id="about">
			<div className="body-text"> Hi! I'm Jacob Hanson-Regalado, a Junior studying Electrical Engineering &
				Computer Science (EECS) at UC Berkeley, scheduled to graduate with a B.S. in Spring 2022. Outside of
				school, I work as a research assistant in applied deep learning (mainly computer vision) for Carnegie
				Mellon University, and also as a web-developer for UC Berkeley Law School. After college, I hope to work
				as a machine learning engineer researching new applications of computer vision. I also enjoy eating
				spicy foods, traveling, playing sports, and hanging out with my girlfriend. I hope you enjoy my site!
			</div>
			<div id="about-img"><img src={AboutImg}/></div>
	</Section>
)

export default AboutPage
