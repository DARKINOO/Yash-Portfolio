import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Techline from './components/Techline'


export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <Techline/> */}
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}
