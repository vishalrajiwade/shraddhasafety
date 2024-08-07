import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Trainings from './components/Trainings'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Trainings />
      <Footer />
    </>
  )
}

export default App