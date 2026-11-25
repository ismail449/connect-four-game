import GameBoard from "~/components/game-board/game-board";
import InGameNaveBar from "~/components/in-game-nav-bar/in-game-nav-bar";
import { TurnProvider } from "~/context/turn";

import styles from "./index.module.css";

export function meta() {
  return [{ title: "In Game" }];
}

export default function InGame() {
  return (
    <TurnProvider>
      <div className={styles.inGamePage}>
        <div className={styles.gameContainer}>
          <InGameNaveBar />
          <GameBoard />
        </div>
      </div>
    </TurnProvider>
  );
}
