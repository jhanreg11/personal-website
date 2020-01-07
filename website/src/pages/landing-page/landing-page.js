import React from 'react'
import './landing-page.css'
import ParticleBackground from '../../components/particle-background/particle-background'
import Typed from '../../components/typed/typed'

const LandingPage = props => (
		<div id="landing">

			<Typed id="landing-text" text="HI, I'M JACOB!" typeSpeed={300} caretSpeed={300} />
			<a id="up-arrow" href="#about">⌃</a>
		</div>
)

export default LandingPage