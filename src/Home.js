import React from 'react';
import Navbar from "./components/Navbar";
import MainBanner from './components/MainBanner';
import Synopsis from './components/Synopsis';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div id="app">
            <Navbar />
            <MainBanner />
            <Synopsis />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home;
