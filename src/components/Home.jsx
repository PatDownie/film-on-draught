import MusicVideos from "./MusicVideos";
import vidoeArrow from "../images/vidoe-1-cropped.gif";
import "../Home.css";

function Home({ modalToggle, changeModalContent, videoScrollState, videoArray }) {
  return (
    <div id="homediv">
      <MusicVideos videoScrollState={videoScrollState} modalToggle={modalToggle} changeModalContent={changeModalContent} videoArray={videoArray} />
      <div id="contentdiv">
        <div id="homeTextDiv">
          <p>we make cool vidoes</p>
        </div>
        <img src={vidoeArrow} alt="arrow" id="vidoeArrow" />

        <iframe src="https://www.youtube.com/embed/TFnUkigM5z8" frameborder="0" id="homeVideo"></iframe>
      </div>
    </div>
  );
}

export default Home;
