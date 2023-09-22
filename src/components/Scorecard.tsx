import { useScoreContext } from "../context/ScoreContext";

export interface CountState {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Scorecard() {
  const { count, setCount } = useScoreContext() as CountState;

  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={() => handleCount()}>Click me</button>
      {count}
    </div>
  );
}
