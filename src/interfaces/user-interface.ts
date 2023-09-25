export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  email?: string;
  id?: string;
}

export interface UserContextType {
  handleUserSignUp: ({ email, password }: UserCredentials) => Promise<void>;
  handleUserSignIn: ({ email, password }: UserCredentials) => Promise<void>;
}

export interface Session {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  user: User | null;
}
