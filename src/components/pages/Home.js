import React from 'react'
import Cards from '../Cards'
import Contact from '../Contact'
import Do from '../Do'
import Footer from '../Footer'
import Header from '../Header'
import Portfolio from '../Portfolios'
import Timelines from '../Timelines'

export default function Home() {
    return (
        <>
            <Header />
            <Do />
            <Cards />
            <Timelines />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}
