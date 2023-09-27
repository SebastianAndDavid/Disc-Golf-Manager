import { useUserContext } from "../context/UserContext";
import { UserContextType } from "../interfaces/user-interface";
import { getUser, userLogOut } from "../utils/supase-users";

export default function Auth() {
  const {
    handleUserSignUp,
    handleUserSignIn,
    currentUser,
    setCurrentUser,
    email,
    setEmail,
    password,
    setPassword,
  } = useUserContext() as UserContextType;

  async function handleSignInSubmit(e: React.FormEvent<HTMLFormElement>) {
    await handleUserSignIn({ email, password }, e);
    setEmail("");
    setPassword("");
  }

  async function handleSignUpSubmit(e: React.FormEvent<HTMLFormElement>) {
    await handleUserSignUp({ email, password }, e);
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <button onClick={() => userLogOut()}>logOut</button>
      <button onClick={() => getUser()}>getUser</button>
      {currentUser ? (
        <div>
          <form onSubmit={(e) => handleSignInSubmit(e)}>
            <h3>Sign In</h3>
            <label>
              Email
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button>Submit</button>
          </form>
          <p onClick={() => setCurrentUser(false)}>Click to Sign Up</p>
        </div>
      ) : (
        <div>
          <form onSubmit={(e) => handleSignUpSubmit(e)}>
            <h3>Sign Up</h3>
            <label>
              Email
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button>Submit</button>
          </form>
          <p onClick={() => setCurrentUser(true)}>Click to Sign In</p>
        </div>
      )}
    </div>
  );
}
