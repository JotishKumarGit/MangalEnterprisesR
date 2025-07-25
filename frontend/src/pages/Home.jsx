import React from 'react'
import CarouselSections from './CarouselSections';
import About from './About';
import Product from './Product';
import Service from './Service';
import Test from './Test';
import Faq from './Faq';
import NewsLetter from './NewsLetter';
import Contact from './Contact';


function Home() {
    return (
        <>
            <CarouselSections />
            <About />
            <Product />
            <Service />
            <Test />
            <Faq />
            <NewsLetter />
            <Contact />
        </>
    )
}

export default Home;



