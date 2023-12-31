export interface Scorecard {
  created_at: string;
  id: number;
  user_id?: string;
  scorecard_column: {
    id: number;
    created_at: string;
    hole_number: number;
    par: number;
    score: number;
    scorecard_id: number;
  }[];
}

export interface ScorecardColumn {
  hole_number: number;
  par: number;
  score: number;
  scorecard_id: number;
}

export interface ScoreContextType {
  score: Scorecard[] | null;
  handleGetAllScores: () => Promise<void>;
  handleInsertScore: ({
    hole_number,
    par,
    score,
    scorecard_id,
  }: ScorecardColumn) => Promise<Scorecard[] | null>;
}
