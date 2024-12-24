import React from 'react'
import Header from '@/layouts/Header'
import Landing from './Landing'
import Offers from '@/components/offersandpolicyandforms/Offers'
import EnquireForms from '@/components/offersandpolicyandforms/EnquireForms'
import Footer from '@/layouts/Footer'

function page() {
  return (
    <>
      <Header bgColor='#f4f1eb' textColor='--primary-cl' />
      <Landing />
      <Offers/>
      <EnquireForms/>
      <Footer />
    </>
  )
}

export default page