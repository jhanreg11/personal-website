import React from 'react'
import './experience.css'

function genExampleLinks(items) {
	let retJSX = [<div>Examples of my work:&nbsp;</div>]
	for (let item of items) {
		retJSX.push(<a href={item.link}>{item.name}</a>)
		retJSX.push(<div>,&nbsp;</div>)
	}
	retJSX.splice(-1, 1)
	retJSX.push(<div>.</div>)
	return retJSX
}

const Experience = props => (
	<div className="experience" id={props.id}>
		<div className="experience-name">{props.name}</div>
		{props.location ? <a href={props.locLink} target='_blank' className="experience-loc">{'@ ' + props.location}</a> : ''}
		<div className="experience-date">{props.dates}</div>
		<div className="experience-list">{props.bullets.map(bullet => (
			<div className="experience-bullet">
				<div className="experience-arrow">{'>'}</div>
				{bullet}
			</div>
		))}
			{props.examples ? <div className="experience-bullet">
					<div className="experience-arrow">{'>'}</div>
					{genExampleLinks(props.examples)}
				</div> : ''}
		</div>
	</div>
)

export default Experience