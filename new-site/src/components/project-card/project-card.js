import React from 'react'
import './project-card.css'
import Overlay from './overlay/overlay'

const ProjectCard = props => {
	let overlay = <Overlay title={props.title} desc={props.desc}/>
	return (
		<div className="project-card">
			<img src={props.img} className="project-img"/>
			<div className="project-title">{props.title}</div>
			{overlay}
		</div>
	)
}

export default ProjectCard