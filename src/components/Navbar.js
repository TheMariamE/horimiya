import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./imgs/horimiya.png";

const Navbar = () => {
    return (
    <div className="col-md-10">
        <nav id="h-menu" className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img src={logo} alt="Horimiya - Logo"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active home-m">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item about-m">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item episodes-m">
                    <Link className="nav-link" to="/episodes">Episodes</Link>
                </li>
                <li className="nav-item author-m">
                    <Link className="nav-link" to="/author">Author</Link>
                </li>
                <li className="nav-item contact-m">
                    <Link className="nav-link" to="/contact">Contact Us!</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
