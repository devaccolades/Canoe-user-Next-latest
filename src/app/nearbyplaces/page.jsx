import React from 'react'
import Header from '@/layouts/Header'
import Offers from '@/components/offersandpolicyandforms/Offers'
import EnquireForms from '@/components/offersandpolicyandforms/EnquireForms'
import Footer from '@/layouts/Footer'
import HeroSection from './HeroSection'
import './nearbyplaces.css'
function page() {
  return (
    <>
      <Header />
      <HeroSection/>
      <Offers />
      <EnquireForms />
      <Footer />
    </>
  )
}

export default page