export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  email?: string;
  id?: string;
}

export interface UserContextType {
  handleUserSignUp: (
    { email, password }: UserCredentials,
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void>;
  handleUserSignIn: (
    { email, password }: UserCredentials,
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void>;
  user: User;
  currentUser: boolean;
  setCurrentUser: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export interface Session {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  user: User | null;
}
