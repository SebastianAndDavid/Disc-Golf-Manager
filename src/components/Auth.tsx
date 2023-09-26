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

  // const userObj = {
  //   email: "tett1233334526@test.com",
  //   password: "123456",
  // };

  return (
    <div>
      {/* <button onClick={() => handleUserSignUp(userObj)}>
        Click for New User
      </button> */}
      {/* <button onClick={() => handleUserSignIn(userObj)}>
        Click for old User
      </button> */}
      <button onClick={() => userLogOut()}>logOut</button>
      <button onClick={() => getUser()}>getUser</button>

      {currentUser ? (
        <div>
          <form onSubmit={(e) => handleUserSignIn({ email, password }, e)}>
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
          <form onSubmit={(e) => handleUserSignUp({ email, password }, e)}>
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
