import React from 'react'
import Footer from '@/layouts/Footer'
import Landing from './Landing'
import Header from '@/layouts/Header'

import './rooms.css'
function page() {
  return (
    <>
    <Header bgColor='#f4f1eb' textColor='--primary-cl'/>
     <Landing/>
     <Footer/>
    </>
  )
}

export default page