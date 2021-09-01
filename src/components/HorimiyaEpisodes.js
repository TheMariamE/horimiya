import React from "react";
import player from "../components/imgs/play-button.svg";

const HorimiyaEpisodes = ({ episodesToRender }) => {return (
    <div className="container-fluid dark-bg-ep">
      {episodesToRender.map((episodes, index) => (
        <div className="container ep-container">
            <a href={episodes.url} key={index} className="ep-btn" rel="noreferrer" target="_blank">
                <div className="row ep">
                    <div className="col-md-3">
                        <img className="ep-img" src={episodes.img1} alt={episodes.title}></img>
                    </div>
                    <div className="col-md-9 ep-content">
                        <div className="row">
                            <div className="col-md-9 ep-text">
                                <h2 className="ep-title">{episodes.title}</h2>
                                <p className="ep-date">{episodes.date}</p>
                            </div>
                            <div className="col-md-3">
                                <img className="ep-player" src={player} alt={episodes.title}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href={episodes.url2} className="ep-2-btn" rel="noreferrer" target="_blank">
                <div className="row ep-2">
                    <div className="col-md-9 ep-2-content">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="ep-2-player" src={player} alt={episodes.title2}></img>
                            </div>
                            <div className="col-md-9 ep-text">
                                <h2 className="ep-2-title">{episodes.title2}</h2>
                                <p className="ep-2-date">{episodes.date2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img className="ep-2-img" src={episodes.img2} alt={episodes.title2}></img>
                    </div>
                </div>
            </a>
        </div>
      ))}
    </div>
  );
};
export default HorimiyaEpisodes;