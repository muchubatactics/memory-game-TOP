import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import "../styles/game.css";
import Gameover from "./Gameover";

export default function Game({level, offset}) {
  const [score, setScore] = useState(0);
  const [imgArr, setImgArr] = useState([]);
  const [legitimacy, setLegitimacy] = useState(2);
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
        arr.push({link:response.data[i].images.fixed_height.webp, clicks: 0, key: i});
      }

      setImgArr(arr);

    }).catch(() => {
      isFetchError.current = true;
      setImgArr(['']); // force rerender
    });

  }, [numberOfCards, offset]);

  function reshuffle(keyy) {
    let temp1 = imgArr.map((obj) => {
      if (obj.key == keyy) {
        return {...obj, clicks: obj.clicks + 1};
      }
      return {...obj};
    })

    let temp2 = [];
    let count = 0;

    while(count < numberOfCards) {
      let rand = Math.floor(Math.random() * numberOfCards);
      if (!temp2[rand]) {
        temp2[rand] = temp1[count];
        count++;
      }
    }

    setLegitimacy(ensureLegitimacy(temp2));
    setImgArr(temp2);
  }

  function ensureLegitimacy(arr) {
    // 0 for fail, 1 for pass, 2 for ongoing
    let temp = 1;
    if (!arr.length) return 2;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].clicks > 1) {
        return 0;
      }
      if (!arr[i].clicks) temp = 2;
    }

    if (temp == 2) {
      setScore((prev) => {
        return prev + 1;
      });
    }

    return temp;
  }


  return (
    <div className="game">
      {
        legitimacy == 2 ? (
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
              <ScoreBoard score={score} level={level} />
              <h1 className="instructions"><i>Click each, but only once!</i></h1>
              <div className={"main " + level}>
                {
                  imgArr.map((obj) => {
                    return <Card key={obj.key} image={obj.link} keyy={obj.key} cb={reshuffle} />
                  })
                }
              </div>
            </>
          )
        )
        :
        (
          <Gameover value={legitimacy} level={level}/>
        )
      }
      
    </div>
  );
}