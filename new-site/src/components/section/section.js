import React from 'react'
import './section.css'

const Section = props => (
		<div className="section" id={props.id}>
			{ props.title ? <h1 className="section-title">{props.title}</h1> : '' }
			<div className="section-body">
				{props.children}
			</div>
		</div>
)

export default Section