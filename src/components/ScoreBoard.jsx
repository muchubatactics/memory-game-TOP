import { useState } from "react";
import "../styles/scoreboard.css"

export default function ScoreBoard ({score}) {
  const [bestScore, setBestScore] = useState(0);

  if (score > bestScore) setBestScore(score);

  return (
    <div className="score-board">
      <div>Current Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
}