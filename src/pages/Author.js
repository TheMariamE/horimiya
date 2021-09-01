import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import AuthorBanner from '../components/AuthorBanner';
import hori from "../components/imgs/KyoukoHori.jpg";

const Author = () => {
    return (
        <div id="author">
            <Navbar />
            <AuthorBanner />
            <div className="container-fluid dark-bg-ep">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="hero">HERO <br></br>(Hiroki Adachi)</h2>
                            <p className="hero-txt">Hiroki Adachi (安達浩樹 Adachi Hiroki?), also known as HERO, is the original author of Hori-san to Miyamura-kun. She published the webcomic from 2007 to 2011, doing both the story and art. The webcomic was readapted into a new, ongoing manga serialized in Monthly GFantasy and titled Horimiya, with HERO returning as the writer and Daisuke Hagiwara doing the artwork.<br></br>On the cover of Volume 1 of Horimiya, there was a message from HERO stating:</p>
                            <p className="hero-txt">I'm grateful to have been offered a chance to have my webcomic turned into a manga. It's surprising how much the impression of it can change with just a different artist! The story seems so much more understandable! Miyamura seems so much sexier! It's bringing back the feelings I had when I first started drawing it, and I hope that I'll be able to enjoy it just as much as a reader now!</p>
                            <p className="hero-name">—HERO, Volume 1</p>
                        </div>
                        <div className="col-md-6 hero-img-container">
                            <div className="bg-blue-hero"></div>
                            <img className="hero-img" src={hori} alt="Horimiya - Hiroki Adachi"></img>
                        </div>
                    </div>                
                </div>
            </div>
            <div className="container-fluid blue-bg-author">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                            <img className="hero-img" src={hori} alt="Horimiya - Daisuke Hagiwara"></img>
                        </div>
                        <div className="col-md-6">
                            <h2 className="daisuke">Daisuke Hagiwara</h2>
                            <p className="daisuke-txt">Daisuke Hagiwara (萩原ダイスケ Hagiwara Daisuke?) is the artist of the ongoing Horimiya manga series serialized in Monthly GFantasy and works alongside HERO, the writer. The manga is a spin-off of HERO's webcomic, Hori-san to Miyamura-kun.<br></br>On the Volume 1 cover of Horimiya, Daisuke Hagiwara wrote a message stating:</p>
                            <p className="daisuke-txt">I'm Hagiwara the artist. I'm praying that I have been able to reproduce even a little bit of the world of HERO-sensei's Horimiya. It has been stressful, but a lot of fun! I hope you can enjoy it!</p>
                            <p className="daisuke-name">—Daisuke Hagiwara, Volume 1</p>
                        </div>
                    </div>                
                </div>
            </div>
            <Footer /> 
        </div>
    )
}

export default Author;
