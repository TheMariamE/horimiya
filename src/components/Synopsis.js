import React from 'react';
import mainbg from "../mainbg.jpg";

const Synopsis = () => {
    return (
        <div id="synopsis" className="container-lg synopsis">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="s-title">Synopsis</h2>
                </div>
            </div>
            <div className="row blue-bg">
                <div className="col-md-6 s-description">
                    <div className="grey-bg">
                        <p className="">Kyouko Hori seems like an average teenage girl, but she has a different side outside of school that she wants no one else to ever find out about. Brought up in a household where both her parents are absent from working, she needs to take care of the house and her little brother, unable to lead a normal social life. Likewise, there is her classmate Izumi Miyamura, who has a different side out of school that remains hidden from others. When the two meet unexpectedly, they discover each others' secrets and develop a special friendship.</p>
                    </div>
                </div>
                <div className="col-md-6 s-img">
                    <div>
                        <img className="" src={mainbg} alt="Horimiya - Main Background"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Synopsis
