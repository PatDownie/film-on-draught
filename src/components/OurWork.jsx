import "../OurWork.css";
import infocard from "../images/infocard1cropped.gif";
import squiggle from "../images/wigglyline1cropped.gif";

function OurWork({ modalToggle, changeModalContent, videoArray }) {
  return (
    <div id="ourworkdiv">
      <div id="squiggleDiv">
        <img src={squiggle} alt="squiggle" />
      </div>
      {videoArray.map((video) => (
        <div className="videodiv">
          <div className="videoInfoDiv">
            <img src={infocard} alt="infocard" />
            <div className="videoInfoContentDiv">
              <h2 className="videoTitle">{video.title}</h2>
              <p className="videoInfo">{video.info}</p>
              <p
                className="watchbuttonembed"
                onClick={() => {
                  modalToggle();
                  changeModalContent(video.embedLink);
                }}
              >
                watch
              </p>
              <a className="watchbuttonlink" href={video.link}>
                watch
              </a>
            </div>
          </div>
          <div className="videoThumbnailDiv">
            <img src={video.thumbnail} alt="video thumbnail" />
            {/* <div className="videoTitleDiv">
              <p className="videoTitle">{video.title}</p>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurWork;
