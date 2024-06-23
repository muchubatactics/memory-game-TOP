import { useState } from 'react';
import '../styles/app.css';
import IntroPage from './IntroPage';
import Game from './Game';

function App() {
  const [isOnIntroPage, setIsOnIntroPage] = useState(true);
  const [level, setLevel] = useState('');
  const [rand, setRand] = useState(Math.round(Math.random() * 44));

  function cbForLevel(level) {
    setLevel(level);
    setIsOnIntroPage((prev) => {
      return prev ? false : true;
    });
  }

  function cbToReturnToIntroPage() {
    setIsOnIntroPage(true);
  }

  return (
    <>
      {
        isOnIntroPage ? 
        <IntroPage callback={cbForLevel} />
        :
        <Game level={level} offset={rand} cbToReturnToIntroPage={cbToReturnToIntroPage} />
      }
    </>
  )
}

export default App
