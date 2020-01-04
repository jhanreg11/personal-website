import React from 'react'
import './minisection.css'

const MiniSection = props => (
	<div className="mini-section" id={props.id}>
		<div className="mini-title">{props.title}</div>
		<div className="mini-body">{props.children}</div>
	</div>
)

export default MiniSection