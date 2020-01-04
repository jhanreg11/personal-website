import React from 'react'
import './overlay.css'

const Overlay = props => (
  <div className="overlay" >
    <div className="overlay-title">{props.title}</div>
    <div className="overlay-body">{props.desc}</div>
  </div>
)

export default Overlay