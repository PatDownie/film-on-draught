import thumb1 from "../images/thumb1.png";
import thumb2 from "../images/thumb2.png";
import thumb3 from "../images/thumb3.png";
import thumb4 from "../images/thumb4.png";
import thumb5 from "../images/thumb5.png";
import thumb6 from "../images/thumb6.png";
import thumb7 from "../images/thumb7.png";
import "../MusicVideos.css";

function MusicVideos() {
  const videoArray = [
    { key: NaN, thumbnail: thumb1, alt: 1, info: "This is video 1", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc" },
    { key: NaN, thumbnail: thumb2, alt: 2, info: "This is video 2", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc" },
    { key: NaN, thumbnail: thumb3, alt: 3, info: "This is video 3", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc" },
    { key: NaN, thumbnail: thumb4, alt: 4, info: "This is video 4", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc" },
    { key: NaN, thumbnail: thumb5, alt: 5, info: "This is video 5", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc" },
    { key: NaN, thumbnail: thumb6, alt: 6, info: "This is video 6", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc" },
    { key: NaN, thumbnail: thumb7, alt: 7, info: "This is video 7", link: "https://www.youtube.com/watch?v=rKI0rQZhTCc" },
  ];

  const videoArrayClone = structuredClone(videoArray);

  const doubleVideoArray = videoArray.concat(videoArrayClone);

  for (let i = 0; i < doubleVideoArray.length; i++) {
    doubleVideoArray[i].key = i + 1;
  }

  console.log(doubleVideoArray);

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
        <div id="innerscroller">
          {doubleVideoArray.map((video) => (
            <div key={video.key} className="videodiv">
              <img src={video.thumbnail} alt={video.alt} className="videothumbnail" />
              <div className="videoinfocard">
                <p>{video.info}</p>
                <a href={video.link}>watch</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MusicVideos;
