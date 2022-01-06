import React from 'react';
import { Link } from 'react-router-dom';
// import mainbg from "./imgs/mainbg.jpg";

const MainBanner = () => {
    return (
        <div>
            <div className="col-sm-12">
                <h2 className="jap-title">ホリミヤ</h2>
            </div>
            <div className="main-bg">
                <div className="col-sm-12 col-md-11 main-title">
                    <h1 className="h-title">Horimiya</h1>
                </div>
                <div className="char-cards">
                    <ul className="row">
                    <li className="col-12 col-md-6 col-lg-6">
                        <div className="cnt-block equal-hight kh">
                            <h3>Kyouko Hori</h3>
                            <p><Link className="nav-footer about" to="/about">Learn More!</Link></p>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-6">
                        <div className="cnt-block equal-hight im">
                            <h3>Izumi Miyamura</h3>
                            <p><Link className="nav-footer about" to="/about">Learn More!</Link></p>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default MainBanner
