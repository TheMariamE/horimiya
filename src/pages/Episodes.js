import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import EpisodesBanner from '../components/EpisodesBanner';

const Episodes = () => {
    return (
        <div id="episodes">
            <Navbar />
            <EpisodesBanner />
            <Footer /> 
        </div>
    )
}

export default Episodes;
