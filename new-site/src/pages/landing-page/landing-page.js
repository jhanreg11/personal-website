import React from 'react'
import './landing-page.css'
import ParticleBackground from '../../components/particle-background/particle-background'
const LandingPage = props => (
		<div id="landing">
			<ParticleBackground color='#FFF'/>
			<div id="landing-text">Hi, I'm Jacob</div>
			<a id="up-arrow" href="#about">⌃</a>
		</div>
)

export default LandingPage