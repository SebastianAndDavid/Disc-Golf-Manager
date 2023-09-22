import { createClient } from "@supabase/supabase-js";
import { GolfHole, Scorecard, NewHole, NewScore, NewScorecardRow } from "../interface";

const url = 'https://wyotgiskxqtlavlkrzle.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3RnaXNreHF0bGF2bGtyemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTEsImV4cCI6MTk2Nzg3MzE5MX0.sPZtCT7VAb2ggZyOHup9lLa3tc0Qg7rfJi5oMMAsq-U'

const supabase = createClient(url, key)


async function getAll(): Promise<Scorecard[] | null> {
    const res = await supabase.from('scorecard').select(`*, golfholes (*), scores (*)`);
    return res.data;
}

async function addNewHole({num, par}: GolfHole): Promise<NewHole[] | null> {
    const res = await supabase.from('golfholes').insert([{hole_number: num, par}, ]).select()
    return res.data
}

async function addScore(score: number): Promise<NewScore[] | null> {
    const res = await supabase.from('scores').insert([{score}, ]).select()
    return res.data;
}

async function addToScorecard({hole_id, score_id}: NewScorecardRow) {
    const res = await supabase.from('scorecard').insert([{hole_id, score_id}, ]).select();
    return res.data;
}

//insert into scorecard - hole_id, score_id

export {getAll, addNewHole, addScore, addToScorecard};