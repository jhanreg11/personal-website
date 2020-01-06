import React from 'react'
import githubImg from '../../img/github_light.png'
import exitImg from '../../img/exit_icon.png'
import './project-card.css'

const ProjectCard = props => {
	let link = props.link ? <a className="project-link" target="_blank" href={props.link}><img src={exitImg}/></a> : ''
	return (
	<div className="project-card">
		<div className="project-img"><img src={props.img}/></div>
		<div className="project-content">
			<div className="project-title">{props.name}</div>
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