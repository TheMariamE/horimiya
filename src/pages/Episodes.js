import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import EpisodesBanner from '../components/EpisodesBanner';
import readmanga from "../components/imgs/ReadtheManga.jpg";
import ep1 from "../components/imgs/episode1.jpg";
import player from "../components/imgs/play-button.svg";

const Episodes = () => {
    return (
        <div id="episodes">
            <Navbar />
            <EpisodesBanner />
            <div className="container-fluid dark-bg-ep">
                <div className="container ep-container">
                    <a href="https://www.youtube.com/watch?v=bdDTSn8ZhxQ" className="ep-btn" rel="noreferrer" target="_blank">
                        <div className="row ep">
                            <div className="col-md-3">
                                <img className="ep-img" src={ep1} alt="Episode 1 - Horimiya"></img>
                            </div>
                            <div className="col-md-9 ep-content">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h2 className="ep-title">Episode 1 - A Tiny Happenstance</h2>
                                        <p className="ep-date">Air Date: February 6, 2021</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img className="ep-player" src={player} alt="Episode 1 - Horimiya"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=bdDTSn8ZhxQ" className="ep-btn" rel="noreferrer" target="_blank">
                        <div className="row ep">
                            <div className="col-md-3">
                                <img className="ep-img" src={ep1} alt="Episode 1 - Horimiya"></img>
                            </div>
                            <div className="col-md-9 ep-content">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h2 className="ep-title">Episode 1 - A Tiny Happenstance</h2>
                                        <p className="ep-date">Air Date: February 6, 2021</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img className="ep-player" src={player} alt="Episode 1 - Horimiya"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <a href="https://readmanganato.com/manga-rz951534" id="rm-btn" rel="noreferrer" target="_blank">
                <div id="read-manga" className="container-fluid blue-bg-rm">
                    <div className="container rm-container">
                        <div className="row">
                            <div className="col-md-9 title-col">
                                <h2 class="rm-txt">Read the Manga Now Online!</h2>                    
                            </div>
                            <div className="col-md-3 btn-col">
                                <img class="rm-btn" src={readmanga} alt="Read Manga - Horimiya"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <Footer /> 
        </div>
    )
}

export default Episodes;
