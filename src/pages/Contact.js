import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import ContactBanner from '../components/ContactBanner';
import ContactForm from '../components/ContactForm';
import facebook from "../components/imgs/c-facebook.png";
import linkedin from "../components/imgs/linkedin.png";
import youtube from "../components/imgs/youtube.png";
import twitter from "../components/imgs/twitter.png";

const Contact = () => {
    return (
        <div id="contact">
            <Navbar />
            <ContactBanner />
            <div className="container-fluid contact-c">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 social-contact">
                        <div className="row">
                            <div className="col-md-3">
                                <a className="social-logo" href="https://www.facebook.com/Horimiya.animefanpage/" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook - Logo"></img></a>
                            </div>
                            <div className="col-md-3">
                                <a className="social-logo" href="https://www.linkedin.com/in/mariam-edwards/" target="_blank" rel="noreferrer"><img src={facebook} alt="Linkedin - Logo"></img></a>
                            </div>
                            <div className="col-md-3">
                                <a className="social-logo" href="https://www.youtube.com/watch?v=8iP8xXXdvoU" target="_blank" rel="noreferrer"><img src={facebook} alt="Youtube - Logo"></img></a>
                            </div>
                            <div className="col-md-3">
                                <a className="social-logo" href="https://twitter.com/horimiya_anime" target="_blank" rel="noreferrer"><img src={facebook} alt="Twitter - Logo"></img></a>
                            </div>
                        </div>
                    </div>  
                </div>                    
            </div>
            <div id="contact-form" className="container-fluid">
                <div className="container">
                    <div className="row">  
                        <div className="col-md-6">
                            <div id="contact-form-title">
                                <h2>Get in Touch with us!</h2>
                            </div>
                            <ContactForm />
                        </div>
                        <div className="col-md-6">
                        <iframe className="map-horimiya" src="https://www.google.com/maps/d/u/0/embed?mid=1Us4MPiCRfUFe-IBQg68EkzW5o4K5uVxH" height="480"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> 
        </div>
    )
}

export default Contact;
