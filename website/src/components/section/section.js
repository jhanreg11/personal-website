import React from 'react'
import './section.css'
import Jello from 'react-reveal/Jello'
import Reveal from 'react-reveal/Reveal'

const SectionTitle = props => (
	<h1 className="section-title" id={props.id + '-title'}>
		{props.children.split('').map(c => {
			if (c == ' ')
				return <div>&nbsp;</div>
			else
				return <div>{c}</div>
		})}
	</h1>
)

class Section extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			counter: 0
		}

		this.handleMouseEnter = this.handleMouseEnter.bind(this)
	}

	componentDidMount() {

	}

	handleMouseEnter() {
		let oldState = this.state.counter
		this.setState({
			counter: oldState + 1
		})
	}

	addAnimationCallback() {
		const title = document.getElementById(this.props.id + '-title')
		const body = document.getElementById(this.props.id + '-body')

		title.addEventListener('animationend', () => {
			title.classList.remove('going-to-animate')
		})

		body.addEventListener('animationend', () => {
			body.classList.remove('going-to-animate')
		})

	}

	render() {
		return (
			<div className="section" id={this.props.id}>
				{/*<Reveal effect="fadeInUp">*/}
				<Jello>
					<SectionTitle id={this.props.id + '-title'}>{this.props.title}</SectionTitle>
				</Jello>
				{/*</Reveal>*/}
			{/*<Reveal effect="fadeInUp">*/}
				<div className="section-body going-to-animate" id={this.props.id + '-body'}>
					{this.props.children}
				</div>
			{/*</Reveal>*/}
		</div>
		)
	}

}

export default Section