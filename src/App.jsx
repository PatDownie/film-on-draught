import "./App.css";
import "./reset.css";
import logo from "./images/logo-png.png";
import MusicVideos from "./components/MusicVideos.jsx";
import VideoModal from "./components/VideoModal";
import Home from "./components/Home";
import OurWork from "./components/OurWork";
import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

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

  return (
    <BrowserRouter>
      <div className="App">
        <div id="sitecontainer">
          <div id="navdiv">
            <img src={logo} alt="VERY COOL FILM ON DRAUGHT LOGO" id="mainlogo" />
            <ul>
              <li>HOME</li>
              <li>OUR WORK</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div id="contentcontainer">
            <Routes>
              <Route path="/" element={<Home videoScrollState={videoScrollState} modalToggle={modalToggle} changeModalContent={changeModalContent} />} />
              <Route path="/penis" element={<OurWork />} />
            </Routes>
          </div>
        </div>
        {modalVisibility && <VideoModal modalContent={modalContent} modalToggle={modalToggle} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
