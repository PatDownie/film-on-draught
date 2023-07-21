import chrisAvatar from "../images/chris-avatar.png";
import bubble from "../images/contactbubble1.gif";
import "../Contact.css";

function Contact() {
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
        <img src={chrisAvatar} alt="avatar" id="avatar" />
      </div>
    </div>
  );
}

export default Contact;
