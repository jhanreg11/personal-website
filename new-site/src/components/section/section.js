import React from 'react'
import './section.css'
import Jello from 'react-reveal/Jello'

class Section extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			counter: 0
		}

		this.handleMouseEnter = this.handleMouseEnter.bind(this)
	}

	handleMouseEnter() {
		let oldState = this.state.counter
		this.setState({
			counter: oldState + 1
		})
	}

	render() {
		return (
			<div className="section" id={this.props.id}>
				<Jello spy={this.state.counter}><h1 className="section-title" onClick={this.handleMouseEnter} onMouseEnter={this.handleMouseEnter}>{this.props.title}</h1></Jello>
			<div className="section-body">
				{this.props.children}
			</div>
		</div>
		)
	}

}

export default Section