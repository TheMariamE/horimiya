import React from 'react'

const Footer = () => {
    return (
        <footer className="col-md-12 dark-bg">
            <div className="row">
                <div className="col-md-3">
                    <h3>Logo</h3>
                </div>
                <div className="col-md-3">
                    <h3>Overview</h3>
                    <p className="footer-d">It is an adaption of the original Hori-san to Miyamura-kun webcomic written and illustrated by HERO. The manga is currently serialized with sixteen volumes in the monthly GFantasy magazine, published by Square Enix.</p>
                </div>
                <div className="col-md-3">
                    <h3>Navigation</h3>
                    <a className="nav-footer first-nav" href="/">Home</a>
                    <a className="nav-footer" href="#">About Us</a>
                    <a className="nav-footer" href="#">Episodes</a>
                    <a className="nav-footer" href="#">Author</a>
                    <a className="nav-footer" href="#">Contact Us</a>
                </div>
                <div className="col-md-3">
                    <h3>Suscribe</h3>
                    <p className="footer-sub">to Our Newsletter!</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
