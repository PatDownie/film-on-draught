import showreelcard from "../images/showreelcard.gif";
import squiggleBorderWHITE from "../images/squiggle border white.gif";
import squiggleBorderGR from "../images/squiggle border goldenrod.gif";
import squiggleBorderRAISIN from "../images/squiggle border.gif";
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
        <p className="hometext goldhometext">Film on Draught - For artists and artisans with a passion for creative storytelling</p>
        <img src={squiggleBorderRAISIN} alt="A squiggly border" className="squigglyborderRAISIN flipped" />

        <p className="hometext raisinhometext">We serve crisp, refreshing films for ambitious bands and growing brands.</p>
        <img src={squiggleBorderRAISIN} alt="A squiggly border" className="squigglyborderRAISIN" />
        <p className="hometext goldhometext">Whether you fancy a bit 'er promotion, or a poppy live session, each video carries our creative fingerprint. </p>
        <img src={squiggleBorderRAISIN} alt="A squiggly border" className="squigglyborderRAISIN flipped" />
        <p className="hometext raisinhometext">We work across animation, short film, advertorial and music video, to deliver your vision with full-bodied flair.</p>
        <img src={squiggleBorderRAISIN} alt="A squiggly border" className="squigglyborderRAISIN" />
      </div>
    </div>
  );
}

export default Home;
