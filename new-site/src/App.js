import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import LandingPage from './pages/landing-page/landing-page'

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
      <div id='body'>
        <LandingPage/>
        <section></section>
      </div>
    </>
  )
}

export default App
