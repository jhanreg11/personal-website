import React from 'react'
import './skill.css'
import Stars from '../stars/stars'

const Skill = (props) => (
	<div className="skill">
		<div className="skill-name">{props.name}</div>
		<div className="dropdown"><Stars gold={props.gold}/></div>
	</div>
)

export default Skill