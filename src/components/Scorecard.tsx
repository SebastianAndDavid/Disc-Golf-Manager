import { useScoreContext } from "../context/ScoreContext";

import { ScoreContextType } from "../interfaces/score-interface";

export default function Scorecard() {
  const { handleGetAllScores, handleInsertScore } =
    useScoreContext() as ScoreContextType;

  const scoreObj = {
    hole_number: 2,
    par: 3,
    score: 2,
    scorecard_id: 1,
  };

  return (
    <div>
      <button onClick={() => handleGetAllScores()}>Click me</button>
      <button onClick={() => handleInsertScore(scoreObj)}>
        Click me first!
      </button>
    </div>
  );
}
