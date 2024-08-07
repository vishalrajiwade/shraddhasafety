import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Trainings from '../components/Trainings'
import ContactForm from '../components/ContactForm'

const HomePage = () => {
  return (
    <>
        <Hero />
        <Services />
        <About />
        <Trainings />
        <ContactForm />
    </>
  )
}

export default HomePage