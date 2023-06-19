import thumb1 from "../images/thumb1.png";
import thumb2 from "../images/thumb2.png";
import thumb3 from "../images/thumb3.png";
import thumb4 from "../images/thumb4.png";
import thumb5 from "../images/thumb5.png";
import thumb6 from "../images/thumb6.png";
import thumb7 from "../images/thumb7.png";
import "../MusicVideos.css";
import VideoModal from "./VideoModal";

function MusicVideos({ modalToggle, changeModalContent, videoScrollState }) {
  const videoArray = [
    { key: NaN, thumbnail: thumb1, alt: 1, info: "This is video 1", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc", embedLink: "https://www.youtube.com/embed/rKI0rQZhTCc?&autoplay=1" },
    { key: NaN, thumbnail: thumb2, alt: 2, info: "This is video 2", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc", embedLink: "https://www.youtube.com/embed/IBjY5WSI4fY?&autoplay=1" },
    { key: NaN, thumbnail: thumb3, alt: 3, info: "This is video 3", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc", embedLink: "https://www.youtube.com/embed/slwmJLaVrdE?&autoplay=1" },
    { key: NaN, thumbnail: thumb4, alt: 4, info: "This is video 4", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc", embedLink: "https://www.youtube.com/embed/OihbIgXBsMU?&autoplay=1" },
    { key: NaN, thumbnail: thumb5, alt: 5, info: "This is video 5", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc", embedLink: "https://www.youtube.com/embed/2ZQde8ubmDg?&autoplay=1" },
    { key: NaN, thumbnail: thumb6, alt: 6, info: "This is video 6", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc", embedLink: "https://www.youtube.com/embed/zfRjsn0fNmI?&autoplay=1" },
    { key: NaN, thumbnail: thumb7, alt: 7, info: "This is video 7", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc", embedLink: "https://www.youtube.com/embed/s1TsnnqgkoY?&autoplay=1" },
  ];

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
