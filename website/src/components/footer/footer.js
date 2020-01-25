import React from 'react'
import instaImg from '../../img/ig_icon.png'
import githubImg from '../../img/github_icon.png'
import gmailImg from '../../img/gmail_icon.png'
import twitterImg from '../../img/twitter_icon.png'
import docImg from '../../img/document.svg'
import './footer.css'

const Footer = props => (
	<div id="footer">
		<a href="https://github.com/jhanreg11" target="_blank"><img className="footer-img" src={githubImg}/></a>
		<a href="mailto:jhanreg11@gmail.com"><img className="footer-img" src={gmailImg}/></a>
		<a href="https://twitter.com/jhanreg11" target="_blank"><img className="footer-img" src={twitterImg}/></a>
		<a href="https://instagram.com/jacobhanson_12" target="_blank"><img className="footer-img" src={instaImg}/></a>
		<a href="/resume.pdf" target="_blank" title="resume"><img className="footer-img" src={docImg}/></a>
	</div>
)

export default Footer