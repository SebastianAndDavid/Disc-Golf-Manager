import { useScoreContext } from "../context/ScoreContext";
import { useUserContext } from "../context/UserContext";

import { ScoreContextType } from "../interfaces/score-interface";
import { UserContextType } from "../interfaces/user-interface";

export default function Scorecard() {
  const {
    handleGetAllScores,
    handleInsertScorecardColumn,
    handleInsertScorecard,
  } = useScoreContext() as ScoreContextType;

  const { user } = useUserContext() as UserContextType;
  console.log("user", user);
  const scoreObj = {
    hole_number: 1,
    par: 3,
    score: 3,
    scorecard_id: 1,
  };

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
      <button onClick={() => handleInsertScorecardColumn(scoreObj)}>
        Click me first!
      </button>
    </div>
  );
}
