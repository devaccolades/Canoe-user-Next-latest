import Header from '@/layouts/Header'
import React from 'react'
import Landing from './Landing'
import Footer from '@/layouts/Footer'

function page() {
  return (
    <>
      <Header bgColor='#f4f1eb' textColor='--primary-cl' />
      <Landing />
      <Footer />
    </>
  )
}

export default page