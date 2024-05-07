import "./App.css";
import "./reset.css";

import logo200 from "./images/FILM ON DRAUGHT LOGO200.png";
import logo600 from "./images/FILM ON DRAUGHT LOGO600.png";
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

import curtainThumb400 from "./images/CurtainThumb400.jpg";
import curtainThumb800 from "./images/CurtainThumb800.jpg";
import homesickSteveThumb400 from "./images/HomesickSteveThumb400.jpg";
import homesickSteveThumb800 from "./images/HomesickSteveThumb800.jpg";
import macintoshThumb400 from "./images/MacintoshThumb400.jpg";
import macintoshThumb800 from "./images/MacintoshThumb800.jpg";
import MFTHUMB400 from "./images/MFTHUMB400.jpg";
import MFTHUMB800 from "./images/MFTHUMB800.jpg";
import odeToBetaThumb400 from "./images/OdeToBeta400.jpg";
import odeToBetaThumb800 from "./images/OdeToBeta800.jpg";
import blackwater400 from "./images/Blackwater400.jpg";
import blackwater800 from "./images/Blackwater800.jpg";
import SS400 from "./images/SS400.jpg";
import SS800 from "./images/SS800.jpg";
import mouldFund400 from "./images/mouldFund400.jpg";
import mouldFund800 from "./images/mouldFund800.jpg";

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
      smallThumbnail: macintoshThumb400,
      largeThumbnail: macintoshThumb800,
      alt: 1,
      title: "WULL - Macintosh",
      info: "Music video for Liverpool-based rockers WULL (formerly Bedside Manners). Created to support musical themes of freedom and rebellion.",
      link: "https://vimeo.com/812538900",
      embedLink: "https://player.vimeo.com/video/812538900?h=478184cea4&autoplay=1",
    },
    {
      key: NaN,
      smallThumbnail: mouldFund400,
      largeThumbnail: mouldFund800,
      alt: 2,
      title: "Mould Fund Logo - Motion Graphics",
      info: "Logo splash animation made for Brighton based SOFT ROT band, Mould Fund.",
      link: "https://www.youtube.com/watch?v=bAoypHQaB08",
      embedLink: "https://www.youtube.com/embed/bAoypHQaB08?&autoplay=1",
    },
    {
      key: NaN,
      smallThumbnail: blackwater400,
      largeThumbnail: blackwater800,
      alt: 3,
      title: "Alastair Gordon - The Blackwater Orchestra (Session)",
      info: "Sheffield's own folk hero Alastair Gordon promo's an upcoming single in this Soviet inspired session.",
      link: "https://www.youtube.com/watch?v=RNHRqRbDu20",
      embedLink: "https://www.youtube.com/embed/RNHRqRbDu20?&autoplay=1",
    },
    {
      key: NaN,
      smallThumbnail: SS400,
      largeThumbnail: SS800,
      alt: 4,
      title: "Georgie Moon: Sandwich Sessions",
      info: "Brighton based vocalist Georgie Moon serves up a delicious musical snack in the first ever installment of Sandwich Sessions for Bella Union records.",
      link: "https://www.youtube.com/watch?v=jA5dyxoiKrM",
      embedLink: "https://www.youtube.com/embed/jA5dyxoiKrM?&autoplay=1",
    },
    {
      key: NaN,
      smallThumbnail: curtainThumb400,
      largeThumbnail: curtainThumb800,
      alt: 5,
      title: "Bean Weevil - Elvis Cymraeg",
      info: "Debut music video for Bean Weevil, alt rockers and Sheffield staples. Made in support of their Elvis Cymraeg single launch.",
      link: "https://www.youtube.com/watch?v=ZrUM8roaZqc",
      embedLink: "https://www.youtube.com/embed/ZrUM8roaZqc?&autoplay=1",
    },

    {
      key: NaN,
      smallThumbnail: odeToBetaThumb400,
      largeThumbnail: odeToBetaThumb800,
      alt: 6,
      title: "Ode to the Beta Sprayer ft. Patrick Downie - The Climbing Hangar",
      info: "Skilled wordsmith Patrick Downie celebrates climbing's unsung heroes in Ode to the Beta Sprayer. This skit played across The Climbing Hanger's blogs and socials.",
      link: "https://www.youtube.com/watch?v=HIXeE9hrbXM",
      embedLink: "https://www.youtube.com/embed/HIXeE9hrbXM?&autoplay=1",
    },
    {
      key: NaN,
      smallThumbnail: MFTHUMB400,
      largeThumbnail: MFTHUMB800,
      alt: 7,
      title: "Mould Fund - Bonsai Trees in Lines (Session)",
      info: "EMBRACE THE SOFT ROT!	First live session for Brighton-based Mould Fund, recorded on location in Forest Glen, with visuals from 1L1T.",
      link: "https://www.youtube.com/watch?v=VavNSyDj_1U",
      embedLink: "https://www.youtube.com/embed/VavNSyDj_1U?&autoplay=1",
    },
    {
      key: NaN,
      smallThumbnail: homesickSteveThumb400,
      largeThumbnail: homesickSteveThumb800,
      alt: 8,
      title: "Alastair Gordon - Homesick Steve (Session)",
      info: "Alaistair Gordon's boozy, bluesy live session, recorded on location at Mouse Room Studio, Sheffield",
      link: "https://www.youtube.com/watch?v=yZYtYTvxcoc",
      embedLink: "https://www.youtube.com/embed/yZYtYTvxcoc?&autoplay=1",
    },
  ];

  const logoSrcSet = logo200 + " 200h, " + logo600 + " 600h";

  return (
    <BrowserRouter>
      <div className="App">
        <div id="sitecontainer">
          <div id="headercontainer">
            <div id="logoandnavcontainer">
              <img srcSet={logoSrcSet} sizes="(max-width: 751px) 400px, 800px" src={logo600} alt="VERY COOL FILM ON DRAUGHT LOGO" id="mainlogo" />
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
