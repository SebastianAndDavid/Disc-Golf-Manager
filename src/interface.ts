export type GolfHole = {
    num: number;
    par: number;
}

export type Scorecard = {
    created_at: string;
    golfholes: {
        created_at: string;
        hole_number: number;
        id: number;
        par: number;
    }
    hole_id: number;
    id: number;
    score_id: number;
    score: {
        created_at: string;
        id: number;
        score: number;
    }
}

export type NewHole = {
    created_at: string;
    hole_number: number;
    id: number;
    par: number;
}

export type newScore = {
    created_at: string;
    id: number;
    score: number;
}