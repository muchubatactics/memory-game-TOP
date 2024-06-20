import { useState } from 'react';
import '../styles/app.css';
import IntroPage from './IntroPage';
import Game from './Game';

function App() {
  const [isOnIntroPage, setIsOnIntroPage] = useState(true);
  const [level, setLevel] = useState('');

  function cbForIntroPage(level) {
    setLevel(level);
    setIsOnIntroPage((prev) => {
      return prev ? false : true;
    });
  }

  return (
    <>
      {
        isOnIntroPage ? 
        <IntroPage callback={cbForIntroPage} />
        :
        <Game level={level} />
      }
    </>
  )
}

export default App
