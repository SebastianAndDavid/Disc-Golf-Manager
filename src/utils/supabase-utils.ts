import { createClient } from "@supabase/supabase-js";
import { Scorecard } from "../interface";

const url = "https://wyotgiskxqtlavlkrzle.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3RnaXNreHF0bGF2bGtyemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTEsImV4cCI6MTk2Nzg3MzE5MX0.sPZtCT7VAb2ggZyOHup9lLa3tc0Qg7rfJi5oMMAsq-U";

const supabase = createClient(url, key);

async function getAllScores(): Promise<Scorecard[] | null> {
  const { data, error } = await supabase
    .from("scorecard")
    .select(`*, scorecard_column(*)`);
  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }
  console.log(data);
  return data as Scorecard[];
}

export { getAllScores };
