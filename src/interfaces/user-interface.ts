export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  email: string;
  id: string;
  session?: string;
}

export interface UserContextType {
  handleUserSignUp: ({ email, password }: UserCredentials) => Promise<void>;
}
