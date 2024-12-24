import React from 'react'
import Header from '@/layouts/Header'
import HeroSection from './HeroSection'
import Info from './Info'
import Offers from '@/components/offersandpolicyandforms/Offers'
import EnquireForms from '@/components/offersandpolicyandforms/EnquireForms'
import Footer from '@/layouts/Footer'

import './contact.css'
function page() {
  return (
    <>
      <Header />
      <HeroSection/>
      <Info/>
      <Offers/>
      <EnquireForms/>
      <Footer/>
    </>
  )
}

export default page