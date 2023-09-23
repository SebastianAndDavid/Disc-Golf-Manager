import "./App.css";
import Scorecard from "./components/Scorecard";
import ScoreProvider from "./context/ScoreContext";

function App() {
  return (
    <>
      <ScoreProvider>
        <Scorecard />
      </ScoreProvider>
    </>
  );
}

export default App;
