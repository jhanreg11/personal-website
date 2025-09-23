import React from 'react'
import Section from '../../components/section/section'
import AboutImg from '../../img/collage.jpg'
import './about-page.css'


const AboutPage = (props) => (
	<Section title="About Me" id="about">
			<div className="body-text"> Hi! I'm Jacob Hanson-Regalado. I graduated from UC Berkeley in 2022 with a B.S. in EECS and am currently pursuing an online MSCS from Georgia Tech part-time. Since my B.S. I have worked on machine learning, backend development, and some frontend.  When I'm not working, I am usually reading, cooking, climbing, biking, or making lovably-ugly art. In 2025 I completed the 200 mile John Muir Trail from Yosemite to Mt Whitney. And when I get the time, I volunteer with the Bay Area Climbing Coalition to maintain the hardware on sport climbing routes and build/maintain trails. 
			</div>
			<div id="about-img"><img src={AboutImg}/></div>
	</Section>
)

export default AboutPage
