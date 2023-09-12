import MusicVideos from "./MusicVideos";
import vidoeArrow from "../images/vidoe-1-cropped.gif";
import showreelcard from "../images/showreelcard.gif";
import squiggleBorderWHITE from "../images/squiggle border white.gif";
import "../Home.css";
import "../reset.css";

function Home({ videoArray }) {
  return (
    <div id="homediv">
      <div id="showreelcontainer">
        <img src={showreelcard} alt="squiggly aesthetic background" />
        <div id="iframecontainer">
          <iframe src="https://www.youtube.com/embed/f4w3qJjCVGU?color=white&rel=0" frameborder="0" allow="fullscreen" id="showreel"></iframe>
        </div>
      </div>
      <img src={squiggleBorderWHITE} alt="A squiggly border" id="squigglyborderWHITE" />
      <div id="hometextcontainer">
        <p id="hometext">This is an area for Nathan to write some good old fashioned all-american spiel</p>
      </div>
    </div>
  );
}

export default Home;
