export type Scorecard = {
  created_at: string;
  id: number;
  scorecard_column: {
    created_at: string;
    hole_number: number;
    id: number;
    par: number;
    score: number;
    scorecard_id: number;
  }[];
};
