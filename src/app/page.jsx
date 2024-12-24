import React from 'react'
import '../app/(home)/home.css'
import Header from '@/layouts/Header'
import Landing from './(home)/Landing'
import Info from './(home)/Info'
import Footer from '@/layouts/Footer'
function page() {
  return (
    <>
    <Header transparent={true}/>
    <Landing/>
    <Footer/>
    </>
  )
}

export default page