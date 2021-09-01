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
