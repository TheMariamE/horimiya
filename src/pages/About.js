import React, { useState } from 'react';
import Modal from "react-modal";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import AboutBanner from '../components/AboutBanner';
import synopsis from "../components/imgs/about-horimiya.jpg";
import kyouko from "../components/imgs/kyouko.png";
import izumi from "../components/imgs/izumi.png";
import yuki from "../components/imgs/yuki.png";
import tooru from "../components/imgs/tooru.png";
import kakeru from "../components/imgs/kakeru.png";
import remi from "../components/imgs/remi.png";
import sakura from "../components/imgs/sakura.png";

Modal.setAppElement("#root");

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }
    return (
        <div id="about">
            <Navbar />
            <AboutBanner />
            <div id="about-us" className="container-fluid">
                <ul className="row characters-1">
                    <li className="col-12 col-md-6 col-lg-3">
                        <a onClick={toggleModal} className="horimiya-characters" href="javascript:void(0)">
                            <div className="cnt-block equal-hight k-h">
                                <img className="" src={kyouko} alt="Horimiya - Kyouko Hori"></img>
                                <h3>Kyouko Hori</h3>
                                <p><a href="javascript:void(0)">Learn More!</a></p>
                            </div>
                        </a>
                    </li>
                    <Modal href="" isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Kyouko Hori" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                        <div>Kyouko Hori</div>
                        <button onClick={toggleModal}>Go Back!</button>
                     </Modal>
                    <li className="col-12 col-md-6 col-lg-3">
                        <a href="https://github.com/TheMariamE" className="horimiya-characters">
                            <div className="cnt-block equal-hight i-m">
                                <img className="" src={izumi} alt="Horimiya - Izumi Miyamura"></img>
                                <h3>Izumi Miyamura</h3>
                                <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                            </div>
                        </a>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <a href="https://github.com/TheMariamE" className="horimiya-characters">
                            <div className="cnt-block equal-hight yy">
                                <img className="" src={yuki} alt="Horimiya - Yuki Yoshikawa"></img>
                                <h3>Yuki Yoshikawa</h3>
                                <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                            </div>
                        </a>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <a href="https://github.com/TheMariamE" className="horimiya-characters">
                            <div className="cnt-block equal-hight ti">
                                <img className="" src={tooru} alt="Horimiya - Tooru Ishikawa"></img>
                                <h3>Tooru Ishikawa</h3>
                                <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="row characters-2">
                    <li className="col-12 col-md-6 col-lg-3">
                        <a href="https://github.com/TheMariamE" className="horimiya-characters">
                            <div className="cnt-block equal-hight ks">
                                <img className="" src={kakeru} alt="Horimiya - Kakeru Sengoku"></img>
                                <h3>Kakeru Sengoku</h3>
                                <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                            </div>
                        </a>
                    </li>
                    <li class="col-12 col-md-6 col-lg-3">
                        <a href="https://github.com/TheMariamE" className="horimiya-characters">
                            <div className="cnt-block equal-hight ra">
                                <img className="" src={remi} alt="Horimiya - Remi Ayasaki"></img>
                                <h3>Remi Ayasaki</h3>
                                <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                            </div>
                        </a>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <a href="https://github.com/TheMariamE" className="horimiya-characters">
                            <div className="cnt-block equal-hight sk">
                                <img className="" src={sakura} alt="Horimiya - Sakura Kouno"></img>
                                <h3>Sakura Kouno</h3>
                                <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
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
                            <img src={synopsis} alt="About Horimiya"></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> 
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
