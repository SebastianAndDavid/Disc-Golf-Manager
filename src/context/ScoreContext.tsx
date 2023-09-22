import { createContext, useState, useContext } from "react";

interface ScoreContextType {
  count?: number;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactNode;
}

const ScoreContext = createContext<ScoreContextType | null>(null);

export default function ScoreProvider({ children }: ScoreContextType) {
  const [count, setCount] = useState(0);
  const stateAndSetters = {
    count,
    setCount,
  };
  return (
    <ScoreContext.Provider value={stateAndSetters}>
      {children}
    </ScoreContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useScoreContext() {
  return useContext(ScoreContext);
}
