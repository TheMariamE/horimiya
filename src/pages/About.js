import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import AboutBanner from '../components/AboutBanner';

const About = () => {
    return (
        <div id="about">
            <Navbar />
            <AboutBanner />
            <Footer /> 
        </div>
    )
}

export default About;
