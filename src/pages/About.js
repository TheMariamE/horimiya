import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import AboutBanner from '../components/AboutBanner';
import synopsis from "../components/imgs/about-horimiya.jpg";

const About = () => {
    return (
        <div id="about">
            <Navbar />
            <AboutBanner />
            <div id="synopsis-au" className="container-lg synopsis">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="sau-title">About Horimiya</h2>
                    </div>
                </div>
                <div className="row dark-bg-au">
                    <div className="col-md-6 sau-description blue-bg-au">
                            <p>Admired at school for her friendly attitude and academic achievements, high school student Kyouko Hori has been hiding another side to herself. With her parents often away from home due to work, Hori also has to look after her younger brother and do the housework, leaving no opportunities to make friends and socialize outside of school. Meanwhile, Izumi Miyamura is seen as a brooding, glasses-wearing, otaku. In reality, he is a gentle person hopeless at studying. He also has nine piercings hidden behind his long hair and a tattoo along his back and left shoulder.</p>
                            <p>By sheer happenstance, Hori and Miyamura cross paths outside of school—neither looking as the other expects. These seemingly polar opposites become fast friends, sharing with each other a side of themselves they have never shown to anyone else.</p>
                    </div>
                    <div className="col-md-5 sau-img">
                        <div>
                            <img className="" src={synopsis} alt="About Horimiya"></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> 
        </div>
    )
}

export default About;
