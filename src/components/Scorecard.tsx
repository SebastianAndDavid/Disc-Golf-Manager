import { useScoreContext } from "../context/ScoreContext";

import { ScoreContextType } from "../interface";

export interface CountState {
  scores: number;
  setScores: React.Dispatch<React.SetStateAction<number>>;
}

export default function Scorecard() {
  const { handleGetAllScores } = useScoreContext() as ScoreContextType;

  return (
    <div>
      <button onClick={() => handleGetAllScores()}>Click me</button>
    </div>
  );
}
