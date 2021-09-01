import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import player from "../components/imgs/play-button.svg";

Modal.setAppElement("#root");

const HorimiyaEpisodes = ({ episodesToRender }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }
    function toggleModal2() {
      setIsOpen2(!isOpen2);
    }

    return (
    <div className="container-fluid dark-bg-ep">
      {episodesToRender.map((episodes, index) => (
        <div className="container ep-container">
            <a onClick={toggleModal} href="#" key={index} className="ep-btn" rel="noreferrer">
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
            <a href="#" onClick={toggleModal2} className="ep-2-btn" rel="noreferrer">
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
            <Modal href="" isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Episodes" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                    <div className="col-md-12">
                        <h2>{episodes.title}</h2>
                        <hr></hr>
                        <iframe className="modal-vid" src={episodes.mEpisode} frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-12">
                        <button className="modal-close-vid" onClick={toggleModal}>Go Back!</button>
                    </div>
            </Modal>
            <Modal href="" isOpen={isOpen2} onRequestClose={toggleModal2} contentLabel="Episodes" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                    <div className="col-md-12">
                        <h2>{episodes.title2}</h2>
                        <hr></hr>
                        <iframe className="modal-vid" src={episodes.mEpisode2} frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-12">
                        <button className="modal-close-vid" onClick={toggleModal2}>Go Back!</button>
                    </div>
            </Modal>
        </div>
      ))}
    </div>
  );
};
export default HorimiyaEpisodes;