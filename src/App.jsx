import "./App.css";
import "./reset.css";
import logo from "./images/logo-png.png";
import VideoModal from "./components/VideoModal";
import Home from "./components/Home";
import OurWork from "./components/OurWork";
import Contact from "./components/Contact";
import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import thumb1 from "./images/thumb1.png";
import thumb2 from "./images/thumb2.png";
import thumb3 from "./images/thumb3.png";
import thumb4 from "./images/thumb4.png";
import thumb5 from "./images/thumb5.png";
import thumb6 from "./images/thumb6.png";
import thumb7 from "./images/thumb7.png";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [videoScrollState, setVideoScrollState] = useState("scrolling");

  function modalToggle() {
    setModalVisibility(!modalVisibility);
    if (videoScrollState == "scrolling") {
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
      thumbnail: thumb1,
      alt: 1,
      title: "video 1",
      info: "This is video 1",
      link: "https://www.youtube.com/watch?v=rKI0rQZhTCc",
      embedLink: "https://www.youtube.com/embed/rKI0rQZhTCc?&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: thumb2,
      alt: 2,
      title: "video 2",
      info: "This is video 2",
      link: "https://www.youtube.com/watch?v=rKI0rQZhTCc",
      embedLink: "https://www.youtube.com/embed/IBjY5WSI4fY?&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: thumb3,
      alt: 3,
      title: "video 3",
      info: "This is video 3",
      link: "https://www.youtube.com/watch?v=rKI0rQZhTCc",
      embedLink: "https://www.youtube.com/embed/slwmJLaVrdE?&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: thumb4,
      alt: 4,
      title: "video 4",
      info: "This is video 4",
      link: "https://www.youtube.com/watch?v=rKI0rQZhTCc",
      embedLink: "https://www.youtube.com/embed/OihbIgXBsMU?&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: thumb5,
      alt: 5,
      title: "video 5",
      info: "This is video 5",
      link: "https://www.youtube.com/watch?v=rKI0rQZhTCc",
      embedLink: "https://www.youtube.com/embed/2ZQde8ubmDg?&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: thumb6,
      alt: 6,
      title: "video 6",
      info: "This is video 6",
      link: "https://www.youtube.com/watch?v=rKI0rQZhTCc",
      embedLink: "https://www.youtube.com/embed/zfRjsn0fNmI?&autoplay=1",
    },
    {
      key: NaN,
      thumbnail: thumb7,
      alt: 7,
      title: "video 7",
      info: "This is video 7",
      link: "https://www.youtube.com/watch?v=rKI0rQZhTCc",
      embedLink: "https://www.youtube.com/embed/s1TsnnqgkoY?&autoplay=1",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <div id="sitecontainer">
          <div id="navdiv">
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
          <div id="contentcontainer">
            <Routes>
              <Route path="/" element={<Home videoScrollState={videoScrollState} modalToggle={modalToggle} changeModalContent={changeModalContent} videoArray={videoArray} />} />
              <Route path="/work" element={<OurWork videoArray={videoArray} />} />
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
