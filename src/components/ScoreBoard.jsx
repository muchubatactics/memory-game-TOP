import { useState } from "react";
import "../styles/scoreboard.css";
import scoreStorage from "./storage";

// scoreStorage.clear();
let scores = scoreStorage.getScores();

export default function ScoreBoard ({score, level}) {
  const [bestScore, setBestScore] = useState(scores[level]);

  if (score > bestScore) {
    scoreStorage.saveScores({...scores, [level]: score});
    scores = scoreStorage.getScores();
    setBestScore(score);
  }

  return (
    <div className="score-board">
      <div>Current Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
}