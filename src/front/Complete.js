import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Feature from './Feature'
import Carousel from './Carousel'
import Footer from './Footer'
import Buttons from './Buttons'
import '../App.css'

const Complete = () => {
  return (
    <>
    <div className="head">
    <Navbar/>
    <Header/>
    </div>
    <Feature/>
    <Carousel/>
    <Buttons/>
    <Footer/>
    </>
  )
}

export default Complete
