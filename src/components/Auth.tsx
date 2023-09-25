import { useUserContext } from "../context/UserContext";
import { UserContextType } from "../interfaces/user-interface";

export default function Auth() {
  const { handleUserSignUp, handleUserSignIn } =
    useUserContext() as UserContextType;

  const userObj = {
    email: "test1233334526@test.com",
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
    </div>
  );
}
