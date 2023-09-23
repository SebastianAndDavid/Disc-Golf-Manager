import { createContext, useState, useContext } from "react";
import { getAllScores } from "../utils/supabase-utils";
import { ScoreContextType, Scorecard } from "../interface";

const ScoreContext = createContext<ScoreContextType | null>(null);

export default function ScoreProvider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState<Scorecard[] | null>(null);

  const stateAndSetters = {
    score,
    setScore,
    handleGetAllScores,
  };

  async function handleGetAllScores() {
    const res: Scorecard[] | null = await getAllScores();
    if (res) {
      setScore(res);
      console.log(score);
    }
  }
  getAllScores();
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
