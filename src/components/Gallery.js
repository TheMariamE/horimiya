import React from 'react';
import mainbg from "../mainbg.jpg";

const Gallery = () => {
    return (
        <div id="gallery-1" className="container-lg gallery-1">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="g-title">I Would Gift You the Sky</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <img className="" src={mainbg} alt="Horimiya - Main Background"></img>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="" src={mainbg} alt="Horimiya - Main Background"></img>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="" src={mainbg} alt="Horimiya - Main Background"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
