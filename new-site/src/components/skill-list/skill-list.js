import React from 'react'
import Skill from './skill/skill'
import './skill-list.css'

const SkillList = (props) => (
	<div className="skill-list" id={props.id}>
		<div className="list-title">{props.name}</div>
		{props.items.map(item => (
			<Skill name={item.name} gold={item.gold}/>
		))}
		<div className="skill-spacer"/>
	</div>
)

export default SkillList