import React from 'react';
import mainbg from "./imgs/mainbg.jpg";

const MainBanner = () => {
    return (
        <div>
            <div className="col-sm-12">
                <h2 className="jap-title">ホリミヤ</h2>
            </div>
            <div className="col-md-11 main-title">
                <h1 className="h-title">Horimiya</h1>
            </div>
            <div className="main-bg">
                <img src={mainbg} alt="Horimiya - Main Background"></img>
            </div>
            <div className="char-cards">
                <ul className="row">
                <li className="col-12 col-md-6 col-lg-6">
                    <div className="cnt-block equal-hight kh">
                        <h3>Kyouko Hori</h3>
                        <p><a href="/about">Learn More!</a></p>
                    </div>
                </li>
                <li className="col-12 col-md-6 col-lg-6">
                    <div className="cnt-block equal-hight im">
                        <h3>Izumi Miyamura</h3>
                        <p><a href="/about">Learn More!</a></p>
                    </div>
                </li>
                </ul>
            </div>    
        </div>
    )
}

export default MainBanner
