import "../OurWork.css";
import infocard from "../images/infocard1cropped.gif";
import squiggle from "../images/wigglyline1cropped.gif";
import broken from "../images/logo-png.png";

function OurWork({ modalToggle, changeModalContent, videoArray }) {
  return (
    <div id="ourworkdiv">
      <div id="squiggleDiv">
        <img src={squiggle} alt="squiggle" />
      </div>
      {videoArray.map((video) => {
        const srcset = video.smallThumbnail + " 400w, " + video.largeThumbnail + " 800w";

        return (
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
              <img srcSet={srcset} sizes="(max-width: 500px) 400px, 800px" src={video.largeThumbnail} alt="video thumbnail" />
              {/* <div className="videoTitleDiv">
              <p className="videoTitle">{video.title}</p>
            </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OurWork;
