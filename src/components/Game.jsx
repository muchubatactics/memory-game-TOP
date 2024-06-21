import { useEffect, useState } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import "../styles/game.css";

export default function Game({level}) {
  const [score, setScore] = useState(0);
  const [imgArr, setImgArr] = useState([]);
  const [offset, setOffset] = useState(0);

  const ky = '3R2af7W6GKrbvl5fSM7XjcmPVgBeW6Qn';
  const base = 'https://api.giphy.com/v1/stickers/search?';
  const query = 'smiley+emoji';

  let map = {
    easy: 6,
    medium: 9,
    hard: 12,
    exteme: 20,
  };
  
  let numberOfCards = map[level];
  

  useEffect(() => {
    fetch(`${base}api_key=${ky}&q=${query}&limit=${numberOfCards}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`, {
      mode: 'cors'
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`${response.statusText}, ${response.status}`);
      }
      return response.json();
    }).then((response) =>  {
      
      let arr = [];
      for (let i = 0; i < numberOfCards; i++) {
        arr.push(response.data[i].images.fixed_height.webp);
      }

      setImgArr(arr);

    }).catch((err) => {
      // TODO::handle error
      console.log(err);
    });

  }, [numberOfCards, offset]);

  let tmp = 0;

  return (
    <div className="game">
      <h1>Here we go!!</h1>
      <ScoreBoard score={score} />
      <div className="main">
        {
          imgArr.map((link) => {
            return <Card key={tmp++} image={link}/>
          })
        }
      </div>
    </div>
  );
}