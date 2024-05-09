import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Hero from './hero/Hero'
import { About } from './about/About'
import Properties from './properties/Properties'
import Guaranteed from './guarantee/Guaranteed'
import Payments from './payments/Payments'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Properties />
        <Guaranteed />
        <Payments />
        <Footer />
    </div>
  )
}

export default Home