import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import EpisodesBanner from '../components/EpisodesBanner';

const Episodes = () => {
    return (
        <div id="episodes">
            <Navbar />
            <EpisodesBanner />
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
