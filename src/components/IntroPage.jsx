import easyImg from "../assets/easy.gif";
import midImg from "../assets/mid.gif";
import hardImg from "../assets/hard.gif";
import extremeImg from "../assets/extreme.gif";
import "../styles/intropage.css";

export default function IntroPage() {

  return (
    <div className="intro-page">
      <h1>Welcome to MT&apos;s Memory Game</h1>
      <h2>Choose your difficulty</h2>
      <div>
        <div className="intro-card">
          <div className="img-div"><img src={easyImg} alt="easy" /></div>
          <p>Easy</p>
        </div>
        <div className="intro-card">
          <div className="img-div"><img src={midImg} alt="medium" /></div>
          <p>Medium</p>
        </div>
        <div className="intro-card">
          <div className="img-div"><img src={hardImg} alt="Hard" /></div>
          <p>Hard</p>
        </div>
        <div className="intro-card">
          <div className="img-div"><img src={extremeImg} alt="extreme" /></div>
          <p>Extreme</p>
        </div>
      </div>
    </div>
  );
}