import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import Landing from './Landing';
import React from 'react'
import TimeLine from './TimeLine';

import '../place.css'
function PlacesInnerPage({ params }) {
    const slug = params.slug;
    return (
        <>
            <Header bgColor='#f4f1eb' textColor='--primary-cl' />
            <Landing/>
            <TimeLine/>
            <Footer />
        </>
    )
}

export default PlacesInnerPage