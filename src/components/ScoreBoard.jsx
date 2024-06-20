import { useState } from "react";
import "../styles/scoreboard.css"

export default function ScoreBoard ({score}) {
  const [bestScore, setBestScore] = useState(0);

  if (score > bestScore) setBestScore(score);

  return (
    <div className="score-board">
      <div>Current Score:</div><div>{score}</div>
      <div>Best Score:</div><div>{bestScore}</div>
    </div>
  );
}