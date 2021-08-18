import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import AuthorBanner from '../components/AuthorBanner';

const Author = () => {
    return (
        <div id="author">
            <Navbar />
            <AuthorBanner />
            <Footer /> 
        </div>
    )
}

export default Author;
