import React from 'react'
import SkillList from '../../components/skill-list/skill-list'
import Section from "../../components/section/section"
import './skills-page.css'

const languages = [
	{
		name: 'Javascript',
		gold: 4
	},
	{
		name: 'Python',
		gold: 5
	},
	{
		name: 'C++',
		gold: 4
	},
	{
		name: 'HTML/CSS',
		gold: 5
	},
	{
		name: 'Java',
		gold: 3
	}
]

const technologies = [
	{
		name: 'React',
		gold: 4
	},
	{
		name: 'jQuery',
		gold: '4'
	},
	{
		name: 'Python Flask',
		gold: 4
	},
	{
		name: 'Nginx',
		gold: 3
	},
	{
		name: 'Git',
		gold: 5
	}
]

const expertise = [
	{
		name: 'Frontend',
		gold: 4
	},
	{
		name: 'Backend',
		gold: 4
	},
	{
		name: 'Deep learning',
		gold: 3
	}
]

const SkillsPage = (props) => (
	<Section title="Skills" id="skills">
		<SkillList items={languages} name="Languages"/>
		<SkillList items={technologies} name="Technologies"/>
		<SkillList items={expertise} name="Expertise"/>
	</Section>
)

export default SkillsPage