import MusicVideos from "./MusicVideos";
import vidoeArrow from "../images/vidoe-1-cropped.gif";
import showreelcard from "../images/showreelcard.gif";
import showReelButton from "../images/showReelButton1Crop.gif";
import "../Home.css";

function Home({ videoArray }) {
  return (
    <div id="homediv">
      <div id="contentdiv">
        <div id="showreelcontainer">
          <img src={showreelcard} alt="squiggly aesthetic background" />
          <div id="iframecontainer">
            <iframe src="https://www.youtube.com/embed/f4w3qJjCVGU?color=white&rel=0" frameborder="0" allow="fullscreen" id="showreel"></iframe>
          </div>
        </div>
      </div>
      <div id="mobilediv">
        <div id="showreelcontainer">
          <img src={showReelButton} alt="An animation enticing the reader to view a show reel" />
        </div>
      </div>
    </div>
  );
}

export default Home;
