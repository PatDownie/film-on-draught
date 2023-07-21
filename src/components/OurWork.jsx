import "../OurWork.css";

function OurWork({ videoArray }) {
  return (
    <div id="ourworkdiv">
      {videoArray.map((video) => (
        <div className="videocard">
          <img src={video.thumbnail} alt={video.alt} />
          <div>
            <h2>{video.info}</h2>
            <p>{video.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurWork;
