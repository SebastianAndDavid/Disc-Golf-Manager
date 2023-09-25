import { createContext, useState, useContext } from "react";
import {
  User,
  UserContextType,
  UserCredentials,
} from "../interfaces/user-interface";
import { userSignUp } from "../utils/supase-users";

const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const stateAndSetters = {
    user,
    setUser,
    handleUserSignUp,
  };

  async function handleUserSignUp({ email, password }: UserCredentials) {
    const res: User | null = await userSignUp({ email, password });

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
