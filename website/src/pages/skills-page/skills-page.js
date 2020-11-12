import React from 'react'
import SkillList from '../../components/skill-list/skill-list'
import Section from "../../components/section/section"
import './skills-page.css'

const languages = [
	{
		name: 'Javascript',
		gold: 5
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
		gold: 4
	}
]

const technologies = [
	{
		name: "PyTorch",
		gold: 5
	},
	{
		name: "Keras",
		gold: 4
	},
	{
		name: 'React',
		gold: 4
	},
	{
		name: 'jQuery',
		gold: 4
	},
	{
		name: 'Python Flask',
		gold: 5
	},
	{
		name: 'NumPy',
		gold: 4
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
		gold: 3
	},
	{
		name: 'Deep learning',
		gold: 4
	}
]
class SkillsPage extends React.Component {
	constructor(props) {
		super(props)

		this.showRandomSkill = this.showRandomSkill.bind(this)
	}

	componentDidMount() {
		setTimeout(this.showRandomSkill, 500)
	}

	showRandomSkill() {
		const dropdowns = document.getElementsByClassName('dropdown')
		const idx = Math.floor(Math.random() * dropdowns.length)

  	let arr = dropdowns[idx].className.split(" ")
  	if (arr.indexOf("show") == -1)
    	dropdowns[idx].className += " show"
		setTimeout(this.clearShowingSkill, 3000)

		setTimeout(this.showRandomSkill, 5000)
	}

	clearShowingSkill() {
		const showingDropdown = document.getElementsByClassName('show')
		console.log(showingDropdown)
		showingDropdown[0].className = showingDropdown[0].className.replace(/\bshow\b/g, "")
	}

	render() {
		return (
			<Section title="Skills" id="skills">
				<SkillList items={languages} name="Languages"/>
				<SkillList items={technologies} name="Technologies"/>
				<SkillList items={expertise} name="Expertise"/>
			</Section>
		)
	}
}

export default SkillsPage
