import chrisAvatar from "../images/chris-avatar.png";
import bubble from "../images/contactbubble1.gif";
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

  function emotionChange(emotionSelection) {
    setEmotionImg(emotionSelection);
  }

  return (
    <div id="contactdivcontainer">
      <div id="contactdiv">
        <div id="speechbubblediv">
          <img src={bubble} alt="speech bubble" id="bubble" />
          <p>
            Hi My name is Chris! <br /> You can contact me like this:
            <br />
            EMAIL: FILMONDRAUGHT@EMAILS.COM
            <br />
            PHONE: 07123456789
            <br />
            SMOKE SIGNAL: ENSURE STRONG NORTHWESTERLY PREVAILING WIND
          </p>
        </div>
        <img src={emotionImg} alt="avatar" id="avatar" />
      </div>
      <p
        className="emotionButton"
        onClick={() => {
          emotionChange(emotionArray[0].image);
        }}
      >
        Happy
      </p>
      <p
        className="emotionButton"
        onClick={() => {
          emotionChange(emotionArray[1].image);
        }}
      >
        Sad
      </p>
      <p
        className="emotionButton"
        onClick={() => {
          emotionChange(emotionArray[2].image);
        }}
      >
        Puzzled
      </p>
      <p
        className="emotionButton"
        onClick={() => {
          emotionChange(emotionArray[3].image);
        }}
      >
        Neutral
      </p>
    </div>
  );
}

export default Contact;
