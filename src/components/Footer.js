import React from 'react';
import logo from "./imgs/horimiya.png";
import facebook from "./imgs/facebook.png";
import linkedin from "./imgs/linkedin.png";
import youtube from "./imgs/youtube.png";
import twitter from "./imgs/twitter.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid dark-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <a className="footer-logo" href="/"><img src={logo} alt="Horimiya - Logo"></img></a>
                            <div className="row social-row">
                                <div className="col-md-3">
                                    <a className="social-logo" href="https://www.facebook.com/Horimiya.animefanpage/" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook - Logo"></img></a>
                                </div>
                                <div className="col-md-3">
                                    <a className="social-logo" href="https://www.linkedin.com/in/mariam-edwards/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin - Logo"></img></a>
                                </div>
                                <div className="col-md-3">
                                    <a className="social-logo" href="https://www.youtube.com/watch?v=8iP8xXXdvoU" target="_blank" rel="noreferrer"><img src={youtube} alt="Youtube - Logo"></img></a>
                                </div>
                                <div className="col-md-3">
                                    <a className="social-logo" href="https://twitter.com/horimiya_anime" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter - Logo"></img></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h3>Overview</h3>
                            <p className="footer-d">It is an adaption of the original Hori-san to Miyamura-kun webcomic written and illustrated by HERO. The manga is currently serialized with sixteen volumes in the monthly GFantasy magazine, published by Square Enix.</p>
                        </div>
                        <div className="col-md-3">
                            <h3>Navigation</h3>
                            <Link className="nav-footer first-nav home" to="/">Home</Link>
                            <Link className="nav-footer about" to="/about">About Us</Link>
                            <Link className="nav-footer episodes" to="/episodes">Episodes</Link>
                            <Link className="nav-footer author" to="/author">Author</Link>
                            <Link className="nav-footer contact" to="/contact">Contact Us</Link>
                        </div>
                        <div className="col-md-3">
                            <h3>Suscribe</h3>
                            <p className="footer-sub">to Our Newsletter!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 dark-bg-cp">
                        <p></p>
                    </div>
                    <div className="col-md-6 blue-bg-cp">
                        <p className="copyright">Copyright © 2021. No rights reserved. | Web Design by Mariam Edwards.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
