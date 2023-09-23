import { createContext, useState, useContext } from "react";
import { getAllScores, insertScore } from "../utils/supabase-utils";
import { ScoreContextType, Scorecard } from "../interface";

const ScoreContext = createContext<ScoreContextType | null>(null);

export default function ScoreProvider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState<Scorecard[] | null>(null);

  const stateAndSetters = {
    score,
    setScore,
    handleGetAllScores,
    handleInsertScore,
  };

  async function handleGetAllScores() {
    const res: Scorecard[] | null = await getAllScores();
    if (res) {
      setScore(res);
      console.log(res);
    }
  }
  
    async function handleInsertScore(hole_number:number, par: number, score: number, scorecard_id: number) {
      const res: Scorecard[] | null = await insertScore(hole_number, par, score, scorecard_id)
      return res;
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
