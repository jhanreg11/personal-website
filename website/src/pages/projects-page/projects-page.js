import React from 'react'
import './projects-page.css'
import Section from "../../components/section/section";
import ProjectCard from '../../components/project-card/project-card'
import Slideshow from '../../components/slideshow/slideshow'
import Button from '../../components/button/button'

import neuroImg from '../../img/neurocars-screenshot.png'
import cashImg from '../../img/cashout_screenshot.png'
import trackImg from '../../img/trackIt_screenshot.png'
import sortImg from '../../img/sort_img.png'

const projects = [
	{
		link: 'https://jacob-hanson.com/neurocars',
		name: 'NeuroCars',
		img: neuroImg,
		tags: 'Neural networks   Neuroevolution  Javascript ES6 Planck.js',
		github: 'https://github.com/jhanreg11/NeuroCars',
		desc: 'NeuroCars is a personal project that demonstrates neuroevolution using planck.js for physics simulations. ' +
			'In the simulation, self-driving cars use neural networks to try to navigate a track without hitting the walls.'
	},
	{
		link: 'https://jacob-hanson.com/sortvisual',
		name: 'Sorting Visualizer',
		img: sortImg,
		tags: 'Sorting Algorithms Javascript ES6 HTML5',
		github: 'https://github.com/jhanreg11/sortvisual',
		desc: 'This is a sorting visualization app that shows many sorting algorithms step-by-step. Built to showcase my ' +
			'algorithms knowledge. Algorithms included are: Heap Sort, Quick Sort, Merge Sort, Radix Sort, Selection Sort, ' +
			'and Bubble Sort.'
	},
	{
		link: 'https://jacob-hanson.com/trackIt',
		name: 'trackIt',
		img: trackImg,
		tags: 'REST API Flask Handlebars.js jQuery MySQL Nginx',
		desc: 'A free small-business tool used to keep track of profits. Users create sale/purchase items and enter in ' +
			'transactions regarding those items.'
	},
	{
		link: 'https://jacob-hanson.com/cashout',
		name: 'CashOut',
		img: cashImg,
		tags: 'REST API Flask Handlebars.js jQuery MySQL Nginx',
		desc: 'DVHacks 2019 Winner. This site is a croudsource ATM project where users can exchange cash for venmo transactions.' +
			' I built it as my first foray into real-world web design with REST API development and MVC design.',
		github: 'https://github.com/jhanreg11/cashout'
	}
]

const cardList = projects.map((item, i) => (
	<ProjectCard link={item.link} img={item.img} name={item.name} tags={item.tags} github={item.github} right={i % 2 == 0 ? true : false}>{item.desc}</ProjectCard>
))

const ProjectsPage = props => (
	<Section id="projects" title="Featured Projects">
		{/*<Slideshow items={cardList}/>*/}
		<div id="projects-body">{cardList}</div>
		<Button to="https://github.com/jhanreg11?tab=repositories">See More</Button>
	</Section>
)

export default ProjectsPage