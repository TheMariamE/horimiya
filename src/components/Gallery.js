import React from 'react';
import img1 from "./imgs/Image2.jpg";
import img3 from "./imgs/Image3.jpg";
import img4 from "./imgs/Image4.jpg";
import img5 from "./imgs/Image5.jpg";
import img6 from "./imgs/Image6.jpg";
import img7 from "./imgs/Image7.jpg";

const Gallery = () => {
    return (
        <div id="gallery-1" className="container-fluid gallery-1">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="g-title">I Would Gift You the Sky</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div>
                        <img className="g-img-3" src={img1} alt="Horimiya - Main Background"></img>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="g-img-3" src={img4} alt="Horimiya - Main Background" />
                        </div>
                        <div className="col-md-6">
                            <img className="g-img-3" src={img5} alt="Horimiya - Main Background" />
                        </div>
                    </div>
                    <div className="row second-row">
                        <div className="col-md-6">
                            <img className="g-img-3" src={img6} alt="Horimiya - Main Background" />
                        </div>
                        <div className="col-md-6">
                            <img className="g-img-3" src={img7} alt="Horimiya - Main Background" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div>
                        <img className="g-img-3" src={img3} alt="Horimiya - Main Background"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
