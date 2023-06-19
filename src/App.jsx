import "./App.css";
import "./reset.css";
import logo from "./images/logo-png.png";
import MusicVideos from "./components/MusicVideos.jsx";
import VideoModal from "./components/VideoModal";
import { useState } from "react";

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
    <div className="App">
      <div id="sitecontainer">
        <div id="navdiv">
          <img src={logo} alt="VERY COOL FILM ON DRAUGHT LOGO" id="mainlogo" />
          <ul>
            <li>HOME</li>
            <li>OUR WORK</li>
            <li>PHOTOGRAPHY</li>
            <li>PRINTS</li>
            <li>MYSTERY SECTION</li>
          </ul>
        </div>
        <div id="contentcontainer">
          <MusicVideos videoScrollState={videoScrollState} modalToggle={modalToggle} changeModalContent={changeModalContent} />
        </div>
      </div>
      {modalVisibility && <VideoModal modalContent={modalContent} modalToggle={modalToggle} />}
    </div>
  );
}

export default App;
