import "./App.css";
import "./reset.css";
import logo from "./images/logo-png.png";
import MusicVideos from "./components/MusicVideos.jsx";

function App() {
  return (
    <div className="App">
      <div id="sitecontainer">
        <div id="navdiv">
          <img src={logo} alt="VERY COOL FILM ON DRAUGHT LOGO" id="mainlogo" />
          <ul>
            <li>HOME</li>
            <li>OUR WORK</li>
            <li>PHOTOGRAPHY</li>
            <li>PRINTS</li>
            <li>MYSTERY SECTION</li>
          </ul>
        </div>
        <div id="contentcontainer">
          <MusicVideos />
        </div>
      </div>
    </div>
  );
}

export default App;
