import React from 'react'
import githubImg from '../../img/github_light.png'
import exitImg from '../../img/exit_icon.png'
import './project-card.css'

const ProjectCard = props => {
	let link = ''
	let title = <div className="project-title">{props.name}</div>
	let overlay = <div></div>
	if (props.link) {
		link = <a className="project-link" target="_blank" href={props.link}><img src={exitImg}/></a>
		title = <a className="project-title" href={props.link} target="_blank">{props.name}</a>
		overlay = <a href={props.link} target="_blank"></a>
	}

		return (
	<div className={props.right ? " project-card right" : "project-card"} style={props.style}>
		<div className="project-img">{overlay}<img src={props.img}/></div>
		<div className="project-content">
			{title}
			<div className="project-desc">{props.children}</div>
			<div className="project-tags">{props.tags}</div>
			<div className="project-links">
				<a href={props.github} target="_blank" className="project-github"><img src={githubImg}/></a>
				{link}
			</div>
		</div>
	</div>
)}

export default ProjectCard