import { useUserContext } from "../context/UserContext";
import { UserContextType } from "../interfaces/user-interface";
import { getUser, userLogOut } from "../utils/supase-users";

export default function Auth() {
  const { handleUserSignUp, handleUserSignIn, currentUser, setCurrentUser } =
    useUserContext() as UserContextType;

  const userObj = {
    email: "tett1233334526@test.com",
    password: "123456",
  };

  return (
    <div>
      <button onClick={() => handleUserSignUp(userObj)}>
        Click for New User
      </button>
      <button onClick={() => handleUserSignIn(userObj)}>
        Click for old User
      </button>
      <button onClick={() => userLogOut()}>logOut</button>
      <button onClick={() => getUser()}>getUser</button>

      {currentUser ? (
        <div>
          <form>
            <h3>Sign In</h3>
            <label>
              Email
              <input type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Password" />
            </label>
            <button>Submit</button>
          </form>
          <p onClick={() => setCurrentUser(false)}>Click to Sign Up</p>
        </div>
      ) : (
        <div>
          <form>
            <h3>Sign Up</h3>
            <label>
              Email
              <input type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Password" />
            </label>
            <button>Submit</button>
          </form>
          <p onClick={() => setCurrentUser(true)}>Click to Sign In</p>
        </div>
      )}
    </div>
  );
}
