import React from 'react';
import logo from "../horimiya.png";

const Navbar = () => {
    return (
    <div className="col-md-10">
        <nav id="h-menu" className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src={logo} alt="Horimiya - Logo"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Episodes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Author</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us!</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
