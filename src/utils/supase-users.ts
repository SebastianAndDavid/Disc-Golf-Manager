import { createClient } from "@supabase/supabase-js";
import { UserCredentials } from "../interfaces/user-interface";

const url = "https://wyotgiskxqtlavlkrzle.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3RnaXNreHF0bGF2bGtyemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTEsImV4cCI6MTk2Nzg3MzE5MX0.sPZtCT7VAb2ggZyOHup9lLa3tc0Qg7rfJi5oMMAsq-U";

const supabase = createClient(url, key);

async function userSignUp({ email, password }: UserCredentials) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  } else {
    return data;
  }
}

async function userSignIn({ email, password }: UserCredentials) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  } else {
    return data;
  }
}

async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("user", user);
  return user;
}

async function userLogOut() {
  const { error } = await supabase.auth.signOut();

  return error;
}

export { userSignUp, userSignIn, userLogOut, getUser };
