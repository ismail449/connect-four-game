import { createContext, use, useCallback, useState } from "react";

type Player = {
  name: string;
  color: "var(--rose-400)" | "var(--amber-300)";
};

type Turn = {
  getCurrentPlayer: () => Player;
  switchTurn: () => void;
};

const playersMap = new Map<number, Player>([
  [0, { name: "Player 1", color: "var(--rose-400)" }],
  [1, { name: "Player 2", color: "var(--amber-300)" }],
]);

const firstPlayer = playersMap.entries().next();

if (firstPlayer.done) {
  throw new Error("A game needs at least one player.");
}

const firstPlayerId = firstPlayer.value[0];
const firstPlayerValue = firstPlayer.value[1];

const defaultContextValue: Turn = {
  getCurrentPlayer: () => firstPlayerValue,
  switchTurn: () => {},
};

const TurnContext = createContext<Turn>(defaultContextValue);

export const TurnProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPlayerId, setCurrentPlayerId] = useState<number>(firstPlayerId);

  const switchTurn = useCallback(() => {
    setCurrentPlayerId((prevPlayerId) => (prevPlayerId + 1) % playersMap.size);
  }, []);
  const getCurrentPlayer = useCallback(
    () => playersMap.get(currentPlayerId) || firstPlayerValue,
    [currentPlayerId],
  );

  return <TurnContext value={{ getCurrentPlayer, switchTurn }}>{children}</TurnContext>;
};

export const useTurnContext = () => {
  return use(TurnContext);
};
