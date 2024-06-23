import passedImg from '../assets/passed.gif';
import failedImg from '../assets/failed.gif';
import '../styles/gameover.css';
import storage from './storage';

export default function Gameover({value, level, cbToReturnToIntroPage}) {

  if (value == 1) {
    let tmp = storage.getScores();
    if (tmp[level] != 8 && tmp[level] != 12 && tmp[level] != 18 && tmp[level] != 24) storage.saveScores({...tmp, [level]: tmp[level] + 1});
  }

  // function handleTryAgain() {
  //   // TODO::write func
  //   cbForLevel(level);
  // }

  function handleGoToHP() {
    // TODO::write func
    cbToReturnToIntroPage();
  }

  return (
    <div className="gameover">
      {
        value ? (
          <>
            <div>
              <img src={passedImg} alt="" />
              <h1>You WIN!</h1>
              {
                level == 'extreme' ? <h2>You're really good at this.<br/>You've defeated the game. Show it off!</h2> : null
              }
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
        {/* <button onClick={handleTryAgain}>Try Again</button> */}
        <button onClick={handleGoToHP}>Go to Home Page</button>
      </div>
    </div>
  );
}