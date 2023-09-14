import "./App.css";
import "./reset.css";

import logo from "./images/logo-png.png";
import squiggleBorder from "./images/squiggle border.gif";
import squiggleBorderLARGE from "./images/large sqiggle border.gif";

import VideoModal from "./components/VideoModal";
import Home from "./components/Home";
import OurWork from "./components/OurWork";
import Contact from "./components/Contact";

import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// import thumb1 from "./images/thumb1.png";
// import thumb2 from "./images/thumb2.png";
// import thumb3 from "./images/thumb3.png";
// import thumb4 from "./images/thumb4.png";
// import thumb5 from "./images/thumb5.png";
// import thumb6 from "./images/thumb6.png";
// import thumb7 from "./images/thumb7.png";

import curtainThumb from "./images/CurtainThumb.jpg";
import homesickSteveThumb from "./images/HomesickSteveThumb.png";
import macintoshThumb from "./images/MacintoshThumb.png";
import MFTHUMB from "./images/MFTHUMB.png";
import odeToBetaThumb from "./images/OdeToBetaThumb.png";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [videoScrollState, setVideoScrollState] = useState("scrolling");

  function modalToggle() {
    setModalVisibility(!modalVisibility);
    if (videoScrollState === "scrolling") {
      setVideoScrollState("paused");
    } else {
      setVideoScrollState("scrolling");
    }
  }

  function changeModalContent(video) {
    setModalContent(video);
  }

  const videoArray = [
    {
      key: NaN,
      thumbnail: curtainThumb,
      alt: 1,
      title: "Elvis Cymraeg by Bean Weevil",
      info: "A wonderful video about welsh elvis what a laff and a jape",
      link: "https://www.youtube.com/watch?v=ZrUM8roaZqc",
      embedLink: "https://www.youtube.com/embed/ZrUM8roaZqc?&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: macintoshThumb,
      alt: 2,
      title: "Macintosh Plus by Bedside Manners",
      info: "An epic video filmed in a challenging location with a set built by the genius mind of Pat Downie",
      link: "https://vimeo.com/812538900",
      embedLink: "https://player.vimeo.com/video/812538900?h=478184cea4&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: odeToBetaThumb,
      alt: 3,
      title: "Ode to the Beta Sprayer",
      info: "A video featuring a very funny and guffaw inducing poem that will generating big hoots and hollars for those that are 'in the know'",
      link: "https://www.youtube.com/watch?v=HIXeE9hrbXM",
      embedLink: "https://www.youtube.com/embed/HIXeE9hrbXM?&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: MFTHUMB,
      alt: 4,
      title: "Mould Fund - Bonsai Trees in Lines (Live in a Forest Glen)",
      info: "a very epic and cool vid displaying guitar prowess and nice flowers for the viewer to sniff. it's nothing to sniff at!",
      link: "https://www.youtube.com/watch?v=VavNSyDj_1U",
      embedLink: "https://www.youtube.com/embed/VavNSyDj_1U?&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: homesickSteveThumb,
      alt: 6,
      title: "Homesick Steve (live session)",
      info: "steve is very homesick",
      link: "https://www.youtube.com/watch?v=yZYtYTvxcoc",
      embedLink: "https://www.youtube.com/embed/yZYtYTvxcoc?&autoplay=1",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <div id="sitecontainer">
          <div id="headercontainer">
            <div id="logoandnavcontainer">
              <img src={logo} alt="VERY COOL FILM ON DRAUGHT LOGO" id="mainlogo" />
              <ul>
                <li>
                  <NavLink className="NavLink" to="/">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink className="NavLink" to="/work">
                    OUR WORK
                  </NavLink>
                </li>
                <li>
                  <NavLink className="NavLink" to="/contact">
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
            <img src={squiggleBorder} alt="Squiggly Border" id="headerbordermobile" />
            <img src={squiggleBorderLARGE} alt="Squiggly Border" id="headerborderdesktop" />
          </div>
          <div id="contentcontainer">
            <Routes>
              <Route path="/" element={<Home videoScrollState={videoScrollState} modalToggle={modalToggle} changeModalContent={changeModalContent} videoArray={videoArray} />} />
              <Route path="/work" element={<OurWork modalToggle={modalToggle} changeModalContent={changeModalContent} videoArray={videoArray} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        {modalVisibility && <VideoModal modalContent={modalContent} modalToggle={modalToggle} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
