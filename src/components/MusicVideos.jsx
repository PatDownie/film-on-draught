// import thumb1 from "../images/thumb1.png";
// import thumb2 from "../images/thumb2.png";
// import thumb3 from "../images/thumb3.png";
// import thumb4 from "../images/thumb4.png";
// import thumb5 from "../images/thumb5.png";
// import thumb6 from "../images/thumb6.png";
// import thumb7 from "../images/thumb7.png";
import "../MusicVideos.css";
import VideoModal from "./VideoModal";

function MusicVideos({ modalToggle, changeModalContent, videoScrollState, videoArray }) {
  const videoArrayClone = structuredClone(videoArray);

  const doubleVideoArray = videoArray.concat(videoArrayClone);

  for (let i = 0; i < doubleVideoArray.length; i++) {
    doubleVideoArray[i].key = i + 1;
  }

  return (
    <div id="musicvideosdiv">
      <div id="outerscroller">
        <div className="exit">
          <div></div>
          <div></div>
        </div>
        <div className="entrance">
          <div></div>
          <div></div>
        </div>
        <div id="innerscroller" className={videoScrollState}>
          {doubleVideoArray.map((video) => (
            <div key={video.key} className="videodiv">
              <img src={video.thumbnail} alt={video.alt} className="videothumbnail" />
              <div className="videoinfocard">
                <p>{video.info}</p>
                <p
                  className="watchbutton"
                  onClick={() => {
                    modalToggle();
                    changeModalContent(video.embedLink);
                  }}
                >
                  watch
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MusicVideos;
