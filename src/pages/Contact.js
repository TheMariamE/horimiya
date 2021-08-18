import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import ContactBanner from '../components/ContactBanner';

const Contact = () => {
    return (
        <div id="contact">
            <Navbar />
            <ContactBanner />
            <Footer /> 
        </div>
    )
}

export default Contact;
