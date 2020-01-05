import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import LandingPage from './pages/landing-page/landing-page'
import AboutPage from './pages/about-page/about-page'
import ParticleBackground from './components/particle-background/particle-background'
import SkillsPage from './pages/skills-page/skills-page'

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
      <Footer/>
      <ParticleBackground color='#122932'/>
      <div id='body'>
        <LandingPage/>
        <AboutPage/>
        <SkillsPage/>
      </div>
    </>
  )
}

export default App
