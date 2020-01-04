import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import LandingPage from './pages/landing-page/landing-page'
import AboutPage from './pages/about-page/about-page'
import ParticleBackground from './components/particle-background/particle-background'

const sections = [
  {
    name: 'About',
    to: '#about'
  },
  {
    name: 'Skills',
    to: '#skills'
  },
  {
    name: 'Projects',
    to: '#project'
  },
  {
    name: 'Experience',
    to: '#experience'
  }
]

function App() {
  return (
    <>
      <Navbar items={sections}/>
      <ParticleBackground color='#D7E1E5'/>
      <div id='body'>
        <LandingPage/>
        <AboutPage/>
      </div>
    </>
  )
}

export default App
