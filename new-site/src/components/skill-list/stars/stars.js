import React from 'react'
import './stars.css'

function generateStars(num) {
	let retString = ''
	for (let i = 0; i < num; ++i)
		retString += '★ '
	return retString
}

const Stars = (props) => (
	<div class="stars">
		<div className="gold star"><div>&nbsp;</div>{generateStars(props.gold)}</div>
		<div className="gray star"><div>&nbsp;</div>{generateStars(5 - props.gold)}</div>
	</div>
)

export default Stars