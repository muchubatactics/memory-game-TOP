import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import "../styles/game.css";

export default function Game({level, offset}) {
  const [score, setScore] = useState(0);
  const [imgArr, setImgArr] = useState([]);
  const isFetchError = useRef(false);

  const ky = '3R2af7W6GKrbvl5fSM7XjcmPVgBeW6Qn';
  const oky = '6PWKQfoxedJPu7RKDxCbmdAq5MHT0Ql9';
  // const base = 'https://api.giphy.com/v1/stickers/search?';
  const base = 'https://api.giphy.com/v2/emoji?';
  // const query = 'smiley+emoji';

  let map = {
    easy: 8,
    medium: 12,
    hard: 18,
    extreme: 24,
  };
  
  let numberOfCards = map[level];

  

  useEffect(() => {
    // fetch(`${base}api_key=${ky}&q=${query}&limit=${numberOfCards}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`, {
    fetch(`${base}api_key=${ky}&limit=${numberOfCards}&offset=${offset}`, {
      mode: 'cors'
    }).then(async (response) => {
      if (!response.ok) {
        if (response.status == 429) {
          const response_1 = await fetch(`${base}api_key=${oky}&limit=${numberOfCards}&offset=${offset}`, {
            mode: 'cors'
          });
          if (!response_1.ok) {
            throw new Error(`${response_1.statusText}, ${response_1.status}`);
          }
          return await response_1.json();
        }
        throw new Error(`${response.statusText}, ${response.status}`);
      }
      return response.json();
    }).then((response) =>  {
      
      let arr = [];
      for (let i = 0; i < numberOfCards; i++) {
        arr.push(response.data[i].images.fixed_height.webp);
      }

      setImgArr(arr);

    }).catch(() => {
      isFetchError.current = true; //it will work in this case even if it's lost every render
    });

  }, [numberOfCards, offset]);

  let tmp = 0;

  return (
    <div className="game">
      {
        isFetchError.current ?
        (
          <>
            <h1>We are experiencing an error getting the images</h1>
            <h2>Either it&apos;s your network, or it&apos;s the use limit on our free api key</h2>
          </>
        )
        : 
        (
          <>
            <ScoreBoard score={score} />
            <h1 className="instructions"><i>Click each, but only once!</i></h1>
            <div className={"main " + level}>
              {
                imgArr.map((link) => {
                  return <Card key={tmp++} image={link}/>
                })
              }
            </div>
          </>
        )
      }
    </div>
  );
}