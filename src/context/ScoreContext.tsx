import { createContext, useState, useContext } from "react";
import {
  getAllScores,
  insertScorecardColumn,
  insertScorecard,
} from "../utils/supabase-utils";
import {
  ScoreContextType,
  Scorecard,
  ScorecardColumn,
} from "../interfaces/score-interface";

const ScoreContext = createContext<ScoreContextType | null>(null);

export default function ScoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [score, setScore] = useState<Scorecard[] | null>(null);

  const stateAndSetters = {
    score,
    setScore,
    handleGetAllScores,
    handleInsertScorecardColumn,
    handleInsertScorecard,
  };

  async function handleGetAllScores() {
    const res: Scorecard[] | null = await getAllScores();
    if (res) {
      setScore(res);
    }
  }

  async function handleInsertScorecardColumn(scoreObj: ScorecardColumn) {
    const res: Scorecard[] | null = await insertScorecardColumn(scoreObj);
    return res;
  }

  async function handleInsertScorecard(userId: string) {
    await insertScorecard(userId);
  }

  return (
    <ScoreContext.Provider value={stateAndSetters}>
      {children}
    </ScoreContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useScoreContext() {
  return useContext(ScoreContext);
}
