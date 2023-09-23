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

export interface ScoreContextType {
  // score: Scorecard;
  // //removing this because example code doesn't include stateSetter in type
  // // setScores: React.Dispatch<React.SetStateAction<number>>;
  // // children: React.ReactNode;
  // //We need to figure out the type of this
  // handleGetAllScores: any;
  score: Scorecard[] | null;
  handleGetAllScores: () => Promise<void>;
}
