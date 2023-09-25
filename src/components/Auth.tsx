import { useUserContext } from "../context/UserContext";
import { UserContextType } from "../interfaces/user-interface";
import { getUser, userLogOut } from "../utils/supase-users";

export default function Auth() {
  const { handleUserSignUp, handleUserSignIn } =
    useUserContext() as UserContextType;

  const userObj = {
    email: "tesstt1233334526@test.com",
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
    </div>
  );
}
