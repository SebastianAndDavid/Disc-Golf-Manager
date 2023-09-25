import "./App.css";
import Auth from "./components/Auth";
import Scorecard from "./components/Scorecard";
import ScoreProvider from "./context/ScoreContext";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <ScoreProvider>
          <Auth />
          <Scorecard />
        </ScoreProvider>
      </UserProvider>
    </>
  );
}

export default App;
