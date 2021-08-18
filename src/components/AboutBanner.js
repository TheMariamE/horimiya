import React from 'react';
import mainbg from "./imgs/aboutbg.jpg";

const AboutBanner = () => {
    return (
        <div>
            <div className="about-bg">
                {/* <img src={mainbg} alt="Horimiya - About Us Background"></img> */}
                <div className="col-md-11 main-title about-title">
                    <h1 className="h-title">Hori-san and Miyamura-kun</h1>
                </div>
            </div>
            {/* <div className="char-cards">
                <ul className="row">
                <li className="col-12 col-md-6 col-lg-6">
                    <div className="cnt-block equal-hight kh">
                        <h3>Kyouko Hori</h3>
                        <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                    </div>
                </li>
                <li className="col-12 col-md-6 col-lg-6">
                    <div className="cnt-block equal-hight im">
                        <h3>Izumi Miyamura</h3>
                        <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                    </div>
                </li>
                </ul>
            </div>   */}
        </div>
    )
}

export default AboutBanner;
