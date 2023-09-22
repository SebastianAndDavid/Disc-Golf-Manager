import "./App.css";
import Scorecard from "./components/Scorecard";
import ScoreProvider from "./context/ScoreContext";
import { getAll } from "./utils/supabase-utils";

function App() {
  getAll();

  return (
    <>
      <ScoreProvider>
        <Scorecard />
      </ScoreProvider>
    </>
  );
}

export default App;
