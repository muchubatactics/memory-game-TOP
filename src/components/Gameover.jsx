import passedImg from '../assets/passed.gif';
import failedImg from '../assets/failed.gif';
import '../styles/gameover.css';

export default function Gameover({value}) {

  function handleTryAgain() {
    // TODO::write func
  }

  function handleGoToHP() {
    // TODO::write func
  }

  return (
    <div className="gameover">
      {
        value ? (
          <>
            <div>
              <img src={passedImg} alt="" />
              <h1>You WIN!</h1>
            </div>
          </>
        ) : (
          <>
            <div>
              <img src={failedImg} alt="" />
              <h1>You LOST!</h1>
            </div>
          </>
        )
      }
      <div className="buttons">
        <button onClick={handleTryAgain}>Try Again</button>
        <button onClick={handleGoToHP}>Go to Home Page</button>
      </div>
    </div>
  );
}