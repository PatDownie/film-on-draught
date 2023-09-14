import chrisAvatar from "../images/chris-avatar.png";
import bubble from "../images/chris speech bubble 1.gif";
import sadimg from "../images/chris-avatar-sad.png";
import puzzledimg from "../images/chris-avatar-puzzled.png";
import neutralimg from "../images/chris-avatar-neutral.png";
import "../Contact.css";
import { useState } from "react";

function Contact() {
  const emotionArray = [
    { emotion: "Happy", image: chrisAvatar },
    { emotion: "Sad", image: sadimg },
    { emotion: "Puzzled", image: puzzledimg },
    { emotion: "Neutral", image: neutralimg },
  ];

  const [emotionImg, setEmotionImg] = useState(emotionArray[0].image);
  const [buttonDispersal, setButtonDispersal] = useState(false);
  const [clickedState, setclickedState] = useState("unclicked");

  function emotionChange(emotionSelection) {
    setEmotionImg(emotionSelection);
  }

  function disperseButtons() {
    if (buttonDispersal == false) {
      setButtonDispersal(true);
      setclickedState("clicked");
    } else {
      setButtonDispersal(false);
      setclickedState("unclicked");
    }
  }

  return (
    <div id="contactpagecontainer">
      <div id="contactdiv">
        <div id="speechbubblecontainer">
          <img src={bubble} alt="speech bubble" id="bubble" />
          <div id="contactinfocontainer">
            <p id="contactinfo">
              Hi My name is Chris! <br /> You can contact me like this:
              <br />
              EMAIL: FILMONDRAUGHT@EMAILS.COM
              <br />
              PHONE: 07123456789
              <br />
              SMOKE SIGNAL: <br />
              ENSURE STRONG NORTHWESTERLY PREVAILING WIND
            </p>
          </div>
        </div>
        <img src={emotionImg} alt="avatar" id="avatar" />
      </div>
      <div id="emotionselectiondiv">
        <p
          className={clickedState + " " + "button"}
          onClick={() => {
            disperseButtons();
          }}
        >
          Emotions
        </p>
        {buttonDispersal &&
          emotionArray.map((emotion) => (
            <p
              className="emotionbutton"
              onClick={() => {
                emotionChange(emotion.image);
              }}
            >
              {emotion.emotion}
            </p>
          ))}
      </div>
    </div>
  );
}

export default Contact;
