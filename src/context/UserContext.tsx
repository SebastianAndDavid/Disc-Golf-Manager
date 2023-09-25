import { createContext, useState, useContext } from "react";
import {
  User,
  UserContextType,
  UserCredentials,
} from "../interfaces/user-interface";
import { userSignIn, userSignUp } from "../utils/supase-users";
import { Session } from "@supabase/supabase-js";

const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<{
    user: User | null;
    session: Session | null;
  } | null>(null);

  const stateAndSetters = {
    user,
    setUser,
    handleUserSignUp,
    handleUserSignIn,
  };

  async function handleUserSignUp({ email, password }: UserCredentials) {
    const res: { user: User | null; session: Session | null } =
      await userSignUp({ email, password });
    if (res) {
      setUser(res);
    }
  }

  async function handleUserSignIn({ email, password }: UserCredentials) {
    const res: { user: User | null; session: Session | null } =
      await userSignIn({ email, password });
    if (res) {
      setUser(res);
    }
  }

  return (
    <UserContext.Provider value={stateAndSetters}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
