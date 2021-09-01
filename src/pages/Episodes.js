import React, { useState, useEffect } from "react";
import HorimiyaEpisodes from "../components/HorimiyaEpisodes";
import episodes from "../components/EpisodesList";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import EpisodesBanner from '../components/EpisodesBanner';
import readmanga from "../components/imgs/ReadtheManga.jpg";
const episodesPerPage = 1;
let arrayForHoldingEpisodes = [];

const Episodes = () => {
    const [episodesToShow, setEpisodesToShow] = useState([]);
    const [next, setNext] = useState(1);
  
    const loopWithSlice = (start, end) => {
      const slicedEpisodes = episodes.slice(start, end);
      arrayForHoldingEpisodes = [...arrayForHoldingEpisodes, ...slicedEpisodes];
      setEpisodesToShow(arrayForHoldingEpisodes);
    };
  
    useEffect(() => {
      loopWithSlice(0, episodesPerPage);
    }, []);
  
    const handleShowMoreEpisodes = () => {
      loopWithSlice(next, next + episodesPerPage);
      setNext(next + episodesPerPage);
    };
    return (
        <div id="episodes">
            <Navbar />
            <EpisodesBanner />
            <HorimiyaEpisodes episodesToRender={episodesToShow} />
            <div className="container-fluid dark-bg-ep">
                <div className="container ep-container ep-btn-lm">
                    <button className="load-more" onClick={handleShowMoreEpisodes}>Load more</button>
                </div>
            </div>
            {/* <div className="container-fluid dark-bg-ep">
                <div className="container ep-container">
                    <a href="https://www.youtube.com/watch?v=bdDTSn8ZhxQ" className="ep-btn" rel="noreferrer" target="_blank">
                        <div className="row ep">
                            <div className="col-md-3">
                                <img className="ep-img" src={ep1} alt="Episode 1 - Horimiya"></img>
                            </div>
                            <div className="col-md-9 ep-content">
                                <div className="row">
                                    <div className="col-md-9 ep-text">
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
                    <a href="https://www.youtube.com/watch?v=IDnr1yfnSgQ" className="ep-2-btn" rel="noreferrer" target="_blank">
                        <div className="row ep-2">
                            <div className="col-md-9 ep-2-content">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img className="ep-2-player" src={player} alt="Episode 2 - Horimiya"></img>
                                    </div>
                                    <div className="col-md-9 ep-text">
                                        <h2 className="ep-2-title">Episode 2 - You Wear More Than One Face</h2>
                                        <p className="ep-2-date">Air Date: February 13, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="ep-2-img" src={ep2} alt="Episode 2 - Horimiya"></img>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=WU96UtqHQ6A" className="ep-btn" rel="noreferrer" target="_blank">
                        <div className="row ep">
                            <div className="col-md-3">
                                <img className="ep-img" src={ep3} alt="Episode 3 - Horimiya"></img>
                            </div>
                            <div className="col-md-9 ep-content">
                                <div className="row">
                                    <div className="col-md-9 ep-text">
                                        <h2 className="ep-title">Episode 3 - That's Why It's Okay</h2>
                                        <p className="ep-date">Air Date: February 20, 2021</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img className="ep-player" src={player} alt="Episode 3 - Horimiya"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=Xa8AvSrg_Gg" className="ep-2-btn" rel="noreferrer" target="_blank">
                        <div className="row ep-2">
                            <div className="col-md-9 ep-2-content">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img className="ep-2-player" src={player} alt="Episode 4 - Horimiya"></img>
                                    </div>
                                    <div className="col-md-9 ep-text">
                                        <h2 className="ep-2-title">Episode 4 - Everybody Loves Somebody</h2>
                                        <p className="ep-2-date">Air Date: March 6, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img className="ep-2-img" src={ep4} alt="Episode 4 - Horimiya"></img>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=S6SMNCloEI4" className="ep-btn" rel="noreferrer" target="_blank">
                        <div className="row ep">
                            <div className="col-md-3">
                                <img className="ep-img" src={ep5} alt="Episode 5 - Horimiya"></img>
                            </div>
                            <div className="col-md-9 ep-content">
                                <div className="row">
                                    <div className="col-md-9 ep-text">
                                        <h2 className="ep-title">Episode 5 - I Can't Say It Out Loud</h2>
                                        <p className="ep-date">Air Date: March 13, 2021</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img className="ep-player" src={player} alt="Episode 5 - Horimiya"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div> */}
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
    );
};

export default Episodes;
