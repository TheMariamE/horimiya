import React from 'react';
import mainbg from "../mainbg.jpg";

const MainBanner = () => {
    return (
        <div>
            <div className="col-sm-12">
                <h2 className="jap-title">ホリミヤ</h2>
            </div>
            <div className="col-sm-11 main-title">
                <h1 className="h-title">Horimiya</h1>
            </div>
            <div class="main-bg">
                <img src={mainbg} alt="Horimiya - Main Background"></img>
            </div>
            <div class="char-cards">
                <ul class="row">
                <li class="col-12 col-md-6 col-lg-6">
                    <div class="cnt-block equal-hight">
                        <h3>Kyouko Hori</h3>
                        <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                    </div>
                </li>
                <li class="col-12 col-md-6 col-lg-6">
                    <div class="cnt-block equal-hight">
                        <h3>Izumi Miyamura</h3>
                        <p><a href="https://github.com/TheMariamE">Learn More!</a></p>
                    </div>
                </li>
                </ul>
            </div>    
        </div>
    )
}

export default MainBanner
