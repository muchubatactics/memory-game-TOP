import { useState } from 'react';
import '../styles/app.css';
import IntroPage from './IntroPage';
import Game from './Game';

function App() {
  const [isOnIntroPage, setIsOnIntroPage] = useState(true);
  const [level, setLevel] = useState('');
  const [rand, setRand] = useState(Math.round(Math.random() * 44));

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
        <Game level={level} offset={rand}/>
      }
    </>
  )
}

export default App
