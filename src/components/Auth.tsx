import { useUserContext } from "../context/UserContext";
import { UserContextType } from "../interfaces/user-interface";

export default function Auth() {
  const { handleUserSignUp } = useUserContext() as UserContextType;

  const userObj = {
    email: "test123456@test.com",
    password: "123456",
  };

  return (
    <div>
      <button onClick={() => handleUserSignUp(userObj)}>Click for User</button>
    </div>
  );
}
