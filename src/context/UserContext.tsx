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
  const [user, setUser] = useState<User>({});
  const [currentUser, setCurrentUser] = useState(false);

  const stateAndSetters = {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    handleUserSignUp,
    handleUserSignIn,
  };

  async function handleUserSignUp({ email, password }: UserCredentials) {
    const res: { user: User | null; session: Session | null } =
      await userSignUp({ email, password });
    if (res.user !== null && res.session !== null) {
      setUser(res.user);
    }
  }

  async function handleUserSignIn({ email, password }: UserCredentials) {
    const res: { user: User | null; session: Session | null } =
      await userSignIn({ email, password });
    if (res.user !== null && res.session !== null) {
      setUser(res.user);
    }
  }

  return (
    <UserContext.Provider value={stateAndSetters}>
      {children}
    </UserContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  return useContext(UserContext);
}
