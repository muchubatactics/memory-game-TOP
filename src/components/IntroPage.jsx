import easyImg from "../assets/easy.gif";
import midImg from "../assets/mid.gif";
import hardImg from "../assets/hard.gif";
import extremeImg from "../assets/extreme.gif";
import "../styles/intropage.css";

export default function IntroPage({callback}) {

  function handleClick(e) {
    callback(e.target.id);
  }

  return (
    <div className="intro-page">
      <h1>Welcome to MT&apos;s Memory Game</h1>
      <h2>Choose your difficulty</h2>
      <div>
        <div className="intro-card" onClick={handleClick}>
          <div className="img-div" ><img id="easy" src={easyImg} alt="easy" /></div>
          <p id="easy" >Easy</p>
        </div>
        <div className="intro-card" onClick={handleClick}>
          <div className="img-div" ><img id="medium" src={midImg} alt="medium" /></div>
          <p id="medium" >Medium</p>
        </div>
        <div className="intro-card" onClick={handleClick}>
          <div className="img-div" ><img id="hard" src={hardImg} alt="Hard" /></div>
          <p id="hard" >Hard</p>
        </div>
        <div className="intro-card" onClick={handleClick}>
          <div className="img-div" ><img id="extreme" src={extremeImg} alt="extreme" /></div>
          <p id="extreme" >Extreme</p>
        </div>
      </div>
    </div>
  );
}