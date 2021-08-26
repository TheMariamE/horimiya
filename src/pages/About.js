import React, { useState } from 'react';
import Modal from "react-modal";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import AboutBanner from '../components/AboutBanner';
import synopsis from "../components/imgs/about-horimiya.jpg";
import kyouko from "../components/imgs/kyouko.png";
import hori from "../components/imgs/KyoukoHori.jpg";
import izumi from "../components/imgs/izumi.png";
import miyamura from "../components/imgs/IzumiMiyamura.jpg";
import yuki from "../components/imgs/yuki.png";
import yoshikawa from "../components/imgs/YukiYoshikawa.jpg";
import tooru from "../components/imgs/tooru.png";
import ishikawa from "../components/imgs/TooruIshikawa.jpg";
import kakeru from "../components/imgs/kakeru.png";
import remi from "../components/imgs/remi.png";
import sakura from "../components/imgs/sakura.png";


Modal.setAppElement("#root");

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }
    function izumiMiyamura() {
        setIsOpen2(!isOpen2);
    }
    function tooruIshikawa() {
      setIsOpen3(!isOpen3);
    }
    function yukiYoshikawa() {
        setIsOpen4(!isOpen4);
    }
    function kakeruSengoku() {
        setIsOpen5(!isOpen5);
    }
    function remiAyasaki() {
      setIsOpen6(!isOpen6);
    }
    function sakuraKouno() {
        setIsOpen7(!isOpen7);
    }
    return (
        <div id="about">
            <Navbar />
            <AboutBanner />
            <div id="about-us" className="container-fluid">
                <ul className="row characters-1">
                    <li className="col-12 col-md-6 col-lg-3">
                        <a onClick={toggleModal} className="horimiya-characters" href="#">
                            <div className="cnt-block equal-hight k-h">
                                <img className="" src={kyouko} alt="Horimiya - Kyouko Hori"></img>
                                <h3>Kyouko Hori</h3>
                                <p>Learn More!</p>
                            </div>
                        </a>
                    </li>
                    <Modal href="" isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Kyouko Hori" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                        <div className="row">
                            <div className="col-md-7 p-container-modal">
                                <h2>Kyouko Hori</h2>
                                <hr></hr>
                                <p>Kyouko Hori (堀 京子 Hori Kyōko?) is protagonists of <b>Horimiya</b>. She is a student in Class 3-1 of Katagiri Senior High School.</p>
                                <p>Kyouko is normally a very energetic and popular person who always creates a happy atmosphere around herself. She is a hard-worker in all aspects of her life, and, according to Izumi Miyamura, she scores above 90% for all her tests. When nervous or embarrassed, she tends to switch to a violent state. This is seen when Kyousuke Hori asks if Miyamura was her boyfriend, resulting in her turning red and shoving a hot ladle into his face.</p>
                                <p>Hori is somewhat of a sadist masochist- however this is only when it comes to Miyamura. Whenever he suddenly flips his personality to that of an abusive boyfriend for a short while (at her request), Hori enjoys the treatment and feels refreshed afterward. This is probably due to the fact that Miyamura is always calm and non-abusive.</p>
                                <p>She is also shown to be very jealous at times girls are flirting with Miyamura to the point where Yuki Yoshikawa and Tooru Ishikawa call her "Ice Queen". In some parts of the manga, she is also referred to as "Hannya" or the "Goddess of Jealousy". Over the course of the story, she does not seem to be too bothered with girls talking to Miyamura anymore but instead, worries that he might love a man. She once told him that it's okay to love another woman but not a man.</p>
                            </div>
                            <div className="col-md-5 img-container-modal">
                                <img className="modal-img" src={hori} alt="Horimiya - Kyouko Hori"></img>
                            </div>
                            <button onClick={toggleModal}>Go Back!</button>
                        </div>
                     </Modal>
                    <li className="col-12 col-md-6 col-lg-3">
                        <a onClick={izumiMiyamura} className="horimiya-characters" href="#">
                            <div className="cnt-block equal-hight i-m">
                                <img className="" src={izumi} alt="Horimiya - Izumi Miyamura"></img>
                                <h3>Izumi Miyamura</h3>
                                <p>Learn More!</p>
                            </div>
                        </a>
                    </li>
                    <Modal href="" isOpen={isOpen2} onRequestClose={izumiMiyamura} contentLabel="Izumi Miyamura" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                        <div className="row">
                            <div className="col-md-7 p-container-modal">
                                <h2>Izumi Miyamura</h2>
                                <hr></hr>
                                <p>Izumi Miyamura (宮村 伊澄 Miyamura Izumi?) is the main protagonists of the <b>Horimiya</b> series. He is a student in Class 3-1 of Katagiri Senior High School.</p>
                                <p>Initially at school, Izumi gives off the impression of a quiet, gloomy and anti-social person. His classmates' perception of him is that he is an otaku with good studying capabilities, but a hard person to approach and maintain a conversation with.</p>
                                <p>Izumi was noticeably shy and struggled to interact with others when he was a child up to his time junior high, resulting in him being frequently ostracized and bullied—especially by Makio Tanihara and his friend group—as his peers considered him a dreary and distant individual. This treatment caused Izumi to adopt a pessimistic nature, and he would give himself piercings with a safety pin whenever he felt school was giving him a difficult time. During this time, it was implied that he also contemplated suicide.</p>
                                <p>However, one day, Izumi met Kouichi Shindou, who was, at the time, friends with Makio. Kouichi treated Izumi much better than their other classmates and the two became good friends, even with Makio's attempt at interference, and they kept in touch despite going to separate high schools. The two are close enough that Izumi changes his personality into a violent and foul-mouthed temper towards Kouichi, a complete 180 compared to his usual demeanor. Izumi credits Kouichi for his positive change in personality between junior high and high school.</p>
                            </div>
                            <div className="col-md-5 img-container-modal">
                                <img className="modal-img" src={miyamura} alt="Horimiya - Izumi Miyamura"></img>
                            </div>
                            <button onClick={izumiMiyamura}>Go Back!</button>
                        </div>
                     </Modal>
                    <li className="col-12 col-md-6 col-lg-3">
                        <a onClick={yukiYoshikawa} className="horimiya-characters" href="#">
                            <div className="cnt-block equal-hight yy">
                                <img className="" src={yuki} alt="Horimiya - Yuki Yoshikawa"></img>
                                <h3>Yuki Yoshikawa</h3>
                                <p>Learn More!</p>
                            </div>
                        </a>
                    </li>
                    <Modal href="" isOpen={isOpen4} onRequestClose={yukiYoshikawa} contentLabel="Yuki Yoshikawa" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                        <div className="row">
                            <div className="col-md-7 p-container-modal">
                                <h2>Yuki Yoshikawa</h2>
                                <hr></hr>
                                <p>Yuki Yoshikawa (吉川 由紀 Yoshikawa Yuki?) is a close friend of Kyouko Hori's who attends Katagiri Senior High School, the same school Hori goes to.</p>
                                <p>Yuki has a typical bubbly and ditzy personality who often creates a fun and happy atmosphere for those close to her, though she can be quite lazy which is evident by her tendency to sleep during class. She is easy to get along with and makes friends relatively quickly, as seen with Izumi Miyamura.</p>
                                <p>However, Yuki often tries to hide her negative feelings—especially in front of friends—by pretending that she is alright and doesn't care about the situation. It is noted by Kyouko that when Yuki doesn't want someone to know something, she tries to hide it by covering it with a smile and that the more she doesn't want to let go of something, the less she talks about it.</p>
                                <p>As she is reserved when it comes to her own feelings, she never tells anyone how she really feels or what she really wants. Due to this, the things she loves often are out of her reach.</p>
                            </div>
                            <div className="col-md-5 img-container-modal">
                                <img className="modal-img" src={yoshikawa} alt="Horimiya - Yuki Yoshikawa"></img>
                            </div>
                            <button onClick={yukiYoshikawa}>Go Back!</button>
                        </div>
                     </Modal>
                    <li className="col-12 col-md-6 col-lg-3">
                        <a onClick={tooruIshikawa} className="horimiya-characters" href="#">
                            <div className="cnt-block equal-hight ti">
                                <img className="" src={tooru} alt="Horimiya - Tooru Ishikawa"></img>
                                <h3>Tooru Ishikawa</h3>
                                <p>Learn More!</p>
                            </div>
                        </a>
                    </li>
                    <Modal href="" isOpen={isOpen3} onRequestClose={tooruIshikawa} contentLabel="Tooru Ishikawa" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                        <div className="row">
                            <div className="col-md-7 p-container-modal">
                                <h2>Tooru Ishikawa</h2>
                                <hr></hr>
                                <p>Tooru Ishikawa (石川 透 Ishikawa Tōru?) is a supporting character in the series. He attends Katagiri Senior High School where he is enrolled in Class 3-1 and a close friend of Izumi Miyamura who was known to have a crush on Kyouko Hori early in the series.</p>
                                <p>Initially, Tooru seems to be a very jealous type of person which is shown when he was glaring at Izumi Miyamura when he talked to Kyouko Hori.</p>
                                <p>He has a very explosive temper as seen in Chapter 12 when he ends up fighting with Miyamura when he (Miyamura) kept waving off Ishikawa's constant pressing on of his theories on whether or not Hori has a crush on Miyamura. However, he expresses regret about losing his temper after the fight.</p>
                                <p>In the end, he becomes one of Miyamura's closest friends and accepts the fact that he and Hori have started dating.</p>
                            </div>
                            <div className="col-md-5 img-container-modal">
                                <img className="modal-img" src={ishikawa} alt="Horimiya - Tooru Ishikawa"></img>
                            </div>
                            <button onClick={tooruIshikawa}>Go Back!</button>
                        </div>
                     </Modal>
                </ul>
                <ul className="row characters-2">
                    <li className="col-12 col-md-6 col-lg-3">
                        <a onClick={kakeruSengoku} className="horimiya-characters" href="#">
                            <div className="cnt-block equal-hight ks">
                                <img className="" src={kakeru} alt="Horimiya - Kakeru Sengoku"></img>
                                <h3>Kakeru Sengoku</h3>
                                <p>Learn More!</p>
                            </div>
                        </a>
                    </li>
                    <Modal href="" isOpen={isOpen5} onRequestClose={kakeruSengoku} contentLabel="Kakeru Sengoku" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                        <div className="row">
                            <div className="col-md-7 p-container-modal">
                                <h2>Kakeru Sengoku</h2>
                                <hr></hr>
                                <p>Kakeru Sengoku (仙石 翔, Sengoku Kakeru) is the charismatic president of the student council of Katagiri Senior High School who is enrolled in class 3-3, the childhood friend of Kyouko Hori and the boyfriend of Remi Ayasaki.</p>
                                <p>Sengoku is a rather shy boy who gets embarrassed easily. The slightest thing will make him cower in fear, especially things to do with horror or insects. Sengoku is very smart and serious, normally ranked #1 in terms of grades in the school (and #2 in phys ed). He enjoys reading and has an incredible level of concentration while doing so, the point of ignoring everything else going around him.</p>
                                <p>He is generally not very expressive with his emotions. The sole exception is his anger or irritation, which he shows all the time as he is the Student Council President. Even though he makes threats and gets angry towards those breaking the rules, he doesn't actually like doing so.</p>
                                <p>Sengoku is very insecure when it comes to his body. Thinking his slender body is embarrassing and always refusing to show it in various occasions, even going as far as to make up extravagant lies to get out of it. He wears multiple layers of clothing to hide his body type.</p>
                            </div>
                            <div className="col-md-5 img-container-modal">
                                <img className="modal-img" src={miyamura} alt="Horimiya - Kakeru Sengoku"></img>
                            </div>
                            <button onClick={kakeruSengoku}>Go Back!</button>
                        </div>
                     </Modal>
                    <li className="col-12 col-md-6 col-lg-3">
                        <a onClick={remiAyasaki} className="horimiya-characters" href="#">
                            <div className="cnt-block equal-hight ra">
                                <img className="" src={remi} alt="Horimiya - Remi Ayasaki"></img>
                                <h3>Remi Ayasaki</h3>
                                <p>Learn More!</p>
                            </div>
                        </a>
                    </li>
                    <Modal href="" isOpen={isOpen6} onRequestClose={remiAyasaki} contentLabel="Remi Ayasaki" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                        <div className="row">
                            <div className="col-md-7 p-container-modal">
                                <h2>Remi Ayasaki</h2>
                                <hr></hr>
                                <p>Remi Ayasaki (綾崎 レミ Ayasaki Remi) is a member of the Student Council who attends Katagiri Senior High School where she is enrolled in class 3-5 and she is known as the girlfriend of Kakeru Sengoku.</p>
                                <p>Remi is usually depicted as a rather childish girl who has a very straightforward personality and who wears her emotions on her sleeve. She seems to rely on other people's help regularly. She's also not very smart, often compared to Izumi Miyamura about which one is more of an idiot. She also usually speaks of himself in 3rd person.</p>
                                <p>Remi is considered as a beautiful and very cute young girl with waist-length hot pink hair that is tied in twintails (where it straight to her down to her shoulders) with bangs hanging over her forehead while she has chin-length hair strands hanging on either side and dark-pink eyes.</p>
                            </div>
                            <div className="col-md-5 img-container-modal">
                                <img className="modal-img" src={miyamura} alt="Horimiya - Remi Ayasaki"></img>
                            </div>
                            <button onClick={remiAyasaki}>Go Back!</button>
                        </div>
                     </Modal>
                    <li className="col-12 col-md-6 col-lg-3">
                        <a onClick={sakuraKouno} className="horimiya-characters" href="#">
                            <div className="cnt-block equal-hight sk">
                                <img className="" src={sakura} alt="Horimiya - Sakura Kouno"></img>
                                <h3>Sakura Kouno</h3>
                                <p>Learn More!</p>
                            </div>
                        </a>
                    </li>
                    <Modal href="" isOpen={isOpen7} onRequestClose={sakuraKouno} contentLabel="Sakura Kouno" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                        <div className="row">
                            <div className="col-md-7 p-container-modal">
                                <h2>Sakura Kouno</h2>
                                <hr></hr>
                                <p>Sakura Kouno (河野 桜 Kōno Sakura?) is the vice-president of the student council of Katagiri Senior High School who is enrolled in Class 3-5 with Remi Ayasaki.</p>
                                <p>Sakura is a well-rounded, kind, and responsible person. She is very hardworking, making sure that the Student Council does its work, as well as any follow-up work. She is also quite conservative as she refuses to admit that she has feelings for Tooru, but she later admits to Remi that she has someone she likes. </p>
                                <p>She is insecure of herself, so much so that she at one point expresses envy of her close friend Remi, who Sakura believes is cute, unlike herself. Her insecurity, however, is something that she slowly comes to terms with throughout the series, which leads her to gain self-confidence and make new friends.</p>
                                <p>In book nine, she states that she is Buddhist.</p>
                            </div>
                            <div className="col-md-5 img-container-modal">
                                <img className="modal-img" src={miyamura} alt="Horimiya - Sakura Kouno"></img>
                            </div>
                            <button onClick={sakuraKouno}>Go Back!</button>
                        </div>
                     </Modal>
                </ul>
            </div>
            <div id="synopsis-au" className="container-lg synopsis">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="sau-title">About Horimiya</h2>
                    </div>
                </div>
                <div className="row dark-bg-au">
                    <div className="col-md-6 sau-description blue-bg-au">
                            <p>Admired at school for her friendly attitude and academic achievements, high school student Kyouko Hori has been hiding another side to herself. With her parents often away from home due to work, Hori also has to look after her younger brother and do the housework, leaving no opportunities to make friends and socialize outside of school. Meanwhile, Izumi Miyamura is seen as a brooding, glasses-wearing, otaku. In reality, he is a gentle person hopeless at studying. He also has nine piercings hidden behind his long hair and a tattoo along his back and left shoulder.</p>
                            <p>By sheer happenstance, Hori and Miyamura cross paths outside of school—neither looking as the other expects. These seemingly polar opposites become fast friends, sharing with each other a side of themselves they have never shown to anyone else.</p>
                    </div>
                    <div className="col-md-5 sau-img">
                        <div>
                            <img src={synopsis} alt="About Horimiya"></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> 
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
