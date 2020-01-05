import React from 'react'

const ProjectCard = props => (
	<div className="project-card">
		<div className="project-img"><img src={props.img}/></div>
		<div className="project-desc">{props.children}</div>
	</div>
)