import { useState } from "react";
import { useScoreContext } from "../context/ScoreContext";
import { useUserContext } from "../context/UserContext";
import { ScoreContextType } from "../interfaces/score-interface";
import { UserContextType } from "../interfaces/user-interface";

import "./Components.css";

export default function Scorecard() {
  const {
    handleGetAllScores,
    handleInsertScorecardColumn,
    handleInsertScorecard,
    score,
  } = useScoreContext() as ScoreContextType;

  const { user } = useUserContext() as UserContextType;

  const [scorecard_id, setScorecard_id] = useState<number | null>(null);
  // console.log("user", user);
  // console.log("score", score);
  // console.log("scorecard_id", scorecard_id);

  function handleInsertScorecardColumnForReal() {
    if (user && user.id && scorecard_id !== null) {
      const scoreObj = {
        hole_number: 1,
        par: 3,
        score: 3,
        scorecard_id,
        user_id: user.id,
      };
      handleInsertScorecardColumn(scoreObj);
    }
  }

  function handleInsertScorecardForReal() {
    if (user && user.id) {
      handleInsertScorecard(user.id);
    }
  }

  return (
    <div>
      <button onClick={() => handleInsertScorecardForReal()}>
        Add a scorecard
      </button>
      <button onClick={() => handleGetAllScores()}>Click me</button>
      <button onClick={() => handleInsertScorecardColumnForReal()}>
        Click me first!
      </button>
      {score?.map((single, i) => {
        return (
          <div
            onClick={() => setScorecard_id(single.id)}
            className="scorecard"
            key={single.id + i}
          >
            {single.id}
          </div>
        );
      })}
    </div>
  );
}
